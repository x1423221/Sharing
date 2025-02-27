<template>
  <PaymentComponents v-model:dialogFormVisible="dialogFormVisible" v-model:dialogpayment="dialogpayment"
    v-model:DocId="DocId"
    >
  </PaymentComponents>
  <el-container>
    <el-header>
      <div class="title-container">
        <BtnGotoHomePage></BtnGotoHomePage>
        <div v-if="currentGroup && !isEdit">
          <span>{{ currentGroup.value.name }}</span>
          <el-button type="success" :icon="Edit" size="small" circle @click="EditGroupName" />
        </div>
        <div v-if="currentGroup && isEdit">
          <el-input type="text" style="width: 100px;" v-model="DocName" />
          <el-button type="success" :icon="Check" size="small" circle @click="SaveGroupName" />
          <el-button type="danger" :icon="Close" size="small" circle @click="EditGroupName" />
        </div>
      </div>
    </el-header>
    <el-main>
      <el-divider content-position="left">
        建議付款方案
      </el-divider>
      <el-table :data="PaymentsList" height="300px">
        <el-table-column prop="from" label="付款人" />
        <el-table-column prop="to" label="收款人" />
        <el-table-column prop="amount" label="應付金額" />
      </el-table>
      <el-divider content-position="left">
        帳目列表
      </el-divider>
      <el-scrollbar height="300px" wrap-style="overflow-x: hidden;">
        <div height="40vh">
          <el-card v-for="(d, index) in TransactionList" :key="index" :class="{ hidden: cardisNew[d.id] }"
            :style="cardStyle[d.id]">
            <template #header>
              <div class="card-header">
                <span>{{ d.description }}</span>
              </div>
            </template>
            <div v-if="d.split">
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
            <template #footer>
              <div v-if="!d.isLock">
                <el-button type="primary" @click="showModal(d)">
                  編輯
                </el-button>
              </div>
            </template>
          </el-card>
        </div>
      </el-scrollbar>
    </el-main>
    <el-footer>
      <el-button type="success" @click="shareMember">分享</el-button>
      <el-button type="success" @click="NewTransaction">新增帳目</el-button>
    </el-footer>
  </el-container>
</template>


<script setup>
import liff from "@line/liff";
import db from "../firebase/config";
import BtnGotoHomePage from "./BtnGotoHomePage.vue";
import PaymentComponents from "./PaymentComponents.vue";

import { Edit, Close, Check } from "@element-plus/icons-vue";
import { inject, onMounted, ref, onUnmounted, reactive, watch, computed } from "vue";
import { doc, updateDoc, setDoc, onSnapshot, getDoc } from "firebase/firestore";
import { Transaction, TransactionDetail, setCardStyle } from "../Models/SplitModels";


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

//文件ID
const DocId = ref("");
//文件名稱
const DocName = ref("");

//帳目卡片的動畫
const cardStyle = reactive({});
const cardisNew = reactive({});

const dialogFormVisible = ref(false);

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

        if (value.split) {
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
                  new TransactionDetail(userId, userName, share));
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
              new TransactionDetail(value.userId, value.payer, myselfAmount * -1));
          }
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


const personSplit = computed(() => {
  const totalShares = TransactionList.value.map(item => {
   return Object.values(item.split
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
      }, {}))});
  return totalShares
})

const dialogpayment = ref({});
const showModal = async (payment) => {
  try {
    const transListdocRef = doc(db, "transactionList", DocId.value);
    isLoading.value = true;
    await updateDoc(transListdocRef, {
      [`${payment.id}.isLock`]: true,
    });

    dialogpayment.value = payment;
    dialogFormVisible.value = true

    isLoading.value = false;
  } catch (err) {
    alert(err)
  }
};

</script>

<style scoped src="../../public/Page.css"></style>
