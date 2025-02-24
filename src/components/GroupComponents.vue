<template>
  <div class="group-container">
    <div class="container-title">
      <div class="title-container">
        <BtnGotoHomePage></BtnGotoHomePage>
        <div v-if="currentGroup && !isEdit">
          <span>{{ currentGroup.value.name }}</span>
          <i class="bi bi-pencil" @click="EditGroupName"></i>
        </div>
        <div v-if="currentGroup && isEdit">
          <input type="text" style="width: 150px" v-model="DocName" />
          <i class="bi bi-check-circle" @click="SaveGroupName"></i>
          <i class="bi bi-x-circle" @click="EditGroupName"></i>
        </div>
      </div>
    </div>
    <div class="container-body">
      <PaymentComponents ref="XsModal"></PaymentComponents>
      <div style="overflow-y: hidden; flex:1">
        <h3>建議付款方案</h3>
        <div style="height: 70%; overflow-y: auto;">
          <ul>
            <li v-for="(payment, index) in PaymentsList" :key="index">
              {{ payment.from }} 應支付 {{ payment.amount }} 元給 {{ payment.to }}
            </li>
          </ul>
        </div>
      </div>
      <div style="overflow-y: hidden; flex: 3;">
        <h3>帳目列表</h3>
        <div class="card-container">
          <div v-for="(d, index) in TransactionList" :key="d.id" class="card" :class="{ hidden: cardisNew[d.id] }"
            :style="cardStyle[d.id]">
            <div class="card-body">
              <h5 class="card-title">{{ d.description }}</h5>
              <div>
                由{{ d.payer }}先墊付金額:<span>{{ d.amount }}</span>
                <p>
                  {{ d.payer }}支付{{d.amount - d.split.filter(s => s.userName !== d.payer).reduce((sum, s) => sum +
                    Number(s.share), 0)}}
                </p>
                <p v-if="d.split.length > 0">
                  <span v-for="(s, i) in personSplit[index]" :key="s.userId">
                    <span>{{ s.userName }}</span>應付<span>{{ s.share }}</span>
                    <span v-if="(i + 1) % 2 === 0"><br /></span>
                    <span v-else-if="i !== personSplit[index].length - 1">, </span>
                  </span>
                </p>
              </div>
              <div v-if="!d.isLock">
                <button class="btn btn-primary" data-bs-target="#exampleModal" @click="showModal(d)">
                  編輯
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="btnArea">
      <button class="btn btn-success" @click="shareMember">分享</button>
      <button class="btn btn-success" @click="NewTransaction">新增帳目</button>
    </div>
  </div>
</template>

<script setup>
import liff from "@line/liff";
import db from "../firebase/config";
import BtnGotoHomePage from "./BtnGotoHomePage.vue";
import PaymentComponents from "./PaymentComponents.vue";

import { inject, onMounted, ref, onUnmounted, reactive, watch, computed } from "vue";
import { doc, updateDoc, setDoc, onSnapshot, getDoc } from "firebase/firestore";
import { Transaction, TransactionDetail } from "../Models/SplitModels";
import { setCardStyle } from "../Models/SplitModels";

//取得記錄的資料
const profile = inject("profile");
const isLoading = inject("isLoading");
const currentGroup = inject("currentGroup");
const MemberList = inject("MemberList");

//編輯旗標
const isEdit = ref(false);
//帳目資料
const TransactionList = ref([]);
//帳目統計資料
const TransactionColData = ref([]);
//最終計算結果
const PaymentsList = ref([]);
//跳窗物件
const XsModal = ref(null);
//文件ID
const DocId = ref("");
//文件名稱
const DocName = ref("");

//帳目卡片的動畫
const cardStyle = reactive({});
const cardisNew = reactive({});

const personSplit = computed(() => {
  const totalShares = TransactionList.value.map(item =>
    Object.values(item.split
      .filter(_item => _item.userName !== item.payer) // 過濾掉 payer
      .reduce((acc, i) => {
        if (!acc[i.userId]) {
          acc[i.userId] = {
            "userName": i.userName,
            "userId": i.userId,
            "share": Number(i.share)
          }
        }
        else {
          acc[i.userId].share += Number(i.share);
        }
        return acc;
      }, {})));
  return totalShares
})


//註冊階段
onMounted(async () => {
  try {
    //先將讀取旗標on上
    isLoading.value = true;

    //設定
    DocName.value = currentGroup.value.name;
    DocId.value = currentGroup.value.id;

    if (currentGroup) {
      fetchTransactions(DocId.value);
    }
  } catch (err) {
    alert(err);
  } finally {
    isLoading.value = false;
  }
});

//監聽List 當有被新增時，更新動畫渲染
watch(TransactionList, (newItem, oldItem) => {
  if (oldItem.length > 0) {
    const plusData = newItem.filter(item => {
      // 如果在 oldItem 中找不到對應的 item.id，則保留這個 item
      return !oldItem.some(_item => _item.id === item.id);
    });
    setCardStyle(plusData, cardStyle, cardisNew)
  }
  else {
    setCardStyle(newItem, cardStyle, cardisNew)
  }
})

const EditGroupName = () => {
  isEdit.value = !isEdit.value;
};

const SaveGroupName = async () => {
  try {
    isLoading.value = true;
    currentGroup.value.name = DocName.value;
    const docRef = doc(db, "241229Test", currentGroup.value.did);
    await updateDoc(docRef, {
      [`${currentGroup.value.id}.name`]: currentGroup.value.name,
    });

    isEdit.value = !isEdit.value;
    isLoading.value = false;
  } catch (err) {
    alert(err);
  }
};

const NewTransaction = async () => {
  isLoading.value = true;

  //id, payer, amount, description, date, split = [];
  const RID = crypto.randomUUID();

  const transaction = new Transaction(
    profile.value.userId,
    profile.value.displayName,
    0,
    profile.value.displayName + "創建",
    new Date()
  ).toMap();

  try {
    const TransactionListdoc = doc(
      db,
      "transactionList",
      currentGroup.value.id
    );
    const TransactionListnap = await getDoc(TransactionListdoc);

    if (TransactionListnap.exists()) {
      await updateDoc(TransactionListdoc, {
        [`${RID}`]: transaction,
      });
    }
    //否則新增文件並新增群組
    else {
      await setDoc(TransactionListdoc, {
        [`${RID}`]: transaction,
      });
    }

    isLoading.value = false;
  } catch (err) {
    alert(err);
  }
};

const shareMember = async () => {
  try {
    const RID = crypto.randomUUID();

    const currentUrl = "https://liff.line.me/2006768109-93myxPab" + "/"; // 取得當前頁面網址
    const shareUrl = `${currentUrl}?s=${RID}`; // 組合分享連結

    //alert(liff.isApiAvailable("shareTargetPicker"));
    await liff
      .shareTargetPicker(
        [
          {
            "type": "flex",
            "altText": "你收到一則分帳群組邀請！",
            "contents": {
              "type": "bubble",
              "body": {
                "type": "box",
                "layout": "vertical",
                "spacing": "md",
                "contents": [
                  {
                    "type": "text",
                    "text": "💰 分帳群組邀請",
                    "weight": "bold",
                    "size": "xl",
                    "color": "#1DB446"
                  },
                  {
                    "type": "text",
                    "text": "群組名稱：" + DocName.value,
                    "wrap": true,
                    "weight": "bold",
                    "size": "md",
                    "color": "#333333"
                  },
                  {
                    "type": "text",
                    "text": "📅 建立日期：" + currentGroup.value.date,
                    "size": "sm",
                    "color": "#666666"
                  },
                  {
                    "type": "text",
                    "text": "📌記錄每一筆支出，讓分帳變得更輕鬆！",
                    "size": "sm",
                    "color": "#999999",
                    "wrap": true
                  }
                ]
              },
              "footer": {
                "type": "box",
                "layout": "vertical",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "button",
                    "style": "primary",
                    "color": "#1DB446",
                    "action": {
                      "type": "uri",
                      "label": "加入群組",
                      "uri": shareUrl
                    }
                  }
                ]
              }
            }
          }],
        {
          isMultiple: true,
        }
      )
      //當成功分享後，將token寫入firebase
      .then(async () => {
        const TokenDoc = doc(db, "TokenList", RID);
        await setDoc(TokenDoc, {
          date: new Date(),
          docId: currentGroup.value.did,
          fid: currentGroup.value.id,
        });
      });
  } catch (err) {
    alert(err);
  }
};

//計算淨額方法
const calculatePayments = () => {

  let transactions = [];

  // 先取出紀錄再TransactionColData中每個人的收支
  let balances = TransactionColData.value.map((user) => ({
    userName: user.userName,
    netAmount: user.splitAmount,
  }));

  // 把要給錢的跟要收錢的區分
  let debtors = balances.filter((user) => user.netAmount < 0);//給錢的
  let creditors = balances.filter((user) => user.netAmount > 0);//收錢的

  //紀錄結果
  let payments = [];

  // 如果要給錢跟要收錢的都有人 才要進來計算
  while (debtors.length > 0 && creditors.length > 0) {

    let debtor = debtors[0]; // 取第一個欠錢的人
    let creditor = creditors[0]; // 取第一個多付錢的人

    //計算
    let paymentAmount = Math.min(
      Math.abs(debtor.netAmount),
      creditor.netAmount
    );

    // 記錄這筆付款
    payments.push({
      from: debtor.userName,
      to: creditor.userName,
      amount: paymentAmount,
    });

    // 更新 debtor, creditor 的餘額
    debtor.netAmount += paymentAmount;
    creditor.netAmount -= paymentAmount;

    // 移除 netAmount 變成 0 的人
    if (debtor.netAmount === 0) debtors.shift();
    if (creditor.netAmount === 0) creditors.shift();
  }

  // 4️⃣ 更新 Vue 變數，讓畫面可以顯示
  transactions = payments;
  return transactions;
};

const fetchTransactions = async (DocId) => {
  const transListdocRef = doc(db, "transactionList", DocId);
  const splitRef = doc(db, "241229Test", currentGroup.value.did);

  const splitShot = onSnapshot(splitRef, (docSnap) => {
    if (docSnap.exists()) {
      const data = docSnap.data()[currentGroup.value.id];
      currentGroup.value.members = data.members;
      MemberList.value = data.members;
    }
  });

  // 設置 Firebase 監聽
  const unsubscribe = onSnapshot(transListdocRef, (docSnap) => {
    TransactionList.value = [];
    TransactionColData.value = [];
    PaymentsList.value = [];
    if (docSnap.exists()) {
      const data = docSnap.data();
      const tmpdata = Object.entries(data).map(([key, value]) => ({
        id: key,
        ...value,
      }));
      TransactionList.value = tmpdata;

      TransactionList.value.forEach((value) => {

        let myselfAmount = 0;
        value.split.forEach((split) => {
          const userId = split.userId;
          const userName = split.userName;
          const share = parseFloat(split.share) * -1; // 轉換成負值

          if (userId != value.userId) {
            myselfAmount += share;
            let issplitExsist = TransactionColData.value.find((record) => {
              return record.userId === userId;
            });

            if (issplitExsist) {
              issplitExsist.splitAmount += share;
            } else {
              TransactionColData.value.push(
                new TransactionDetail(userId, userName, share)
              );
            }
          }
        });

        let isExsist = TransactionColData.value.find((record) => {
          return record.userId == value.userId;
        });

        if (isExsist) {
          isExsist.splitAmount += myselfAmount * -1;
        } else {
          TransactionColData.value.push(
            new TransactionDetail(value.userId, value.payer, myselfAmount * -1)
          );
        }
      });

      PaymentsList.value = calculatePayments(); // 每次 Firebase 資料變動時更新統計數據

      PaymentsList.value.sort((a, b) => b.amount - a.amount);
      TransactionList.value.sort((a, b) => new Date(b.date) - new Date(a.date));
      TransactionColData.value.sort((a, b) => a.splitAmount - b.splitAmount);

    } else {
      TransactionList.value = [];
      TransactionColData.value = [];
    }
  });

  // 當組件卸載時，停止監聽
  onUnmounted(() => {
    splitShot();
    unsubscribe();
  });
};

const showModal = async (payment) => {
  const transListdocRef = doc(db, "transactionList", DocId.value);
  //const TransactionListnap = await getDoc(transListdocRef);
  isLoading.value = true;
  await updateDoc(transListdocRef, {
    [`${payment.id}.isLock`]: true,
  });

  XsModal.value.showModal(
    payment,
    //currentGroup.value.members,
    DocId.value
  );

  isLoading.value = false;
};

</script>

<style scoped>
.detail {
  background-color: #bebebe;
  padding: 5px;
  margin: 5px;
}

.btnArea {
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.t {
  color: white;
  width: 40px;
  height: 40px;
  background-color: lightslategray;
  border-radius: 50%;
  text-align: center;
  align-content: center;
}

.row {
  margin: 5px;
}

.col {
  align-items: center;
  align-content: center;
}
</style>
