<template>
  <el-container>
    <el-header>
      <h1>分帳輕鬆搞定</h1>
      <p>快速紀錄與分帳，讓金錢計算更簡單。</p>
    </el-header>
    <el-main >
      <el-button id="btnCreateNew" @click="gotoGroupPage">
        建立新分帳
      </el-button>
      <el-button id="btnShowHis" @click="gotoHistoryPage">
        檢視歷史紀錄
      </el-button>
    </el-main>
  </el-container>
</template>


<script setup>
import { ref, onMounted, inject } from "vue";
import { useRouter, useRoute } from "vue-router";
import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  deleteDoc,
  arrayUnion,
} from "firebase/firestore";
import { SplitData, Member } from "../Models/SplitModels";

import db from "../firebase/config";
import liff from "@line/liff";

//讀取旗標，用inject取得父元件定義的資料
const isLoading = inject("isLoading");
//LINE使用者資訊
const profile = inject("profile");
//分帳資料
const currentGroup = inject("currentGroup");
//分帳資料
const splitData = ref({});
//route用於切換至Group或者History
const route = useRoute();
//分享連結的Token
const sId = ref(null);
const router = useRouter();

//Vue元件開始註冊時
onMounted(async () => {
  //設定讀取標籤為true，表示載入中，頁面反灰不可使用
  isLoading.value = true;
  //使用Liff方法取得目前登入使用者的資料
  await liff.getProfile().then((value) => {
    //設定取得的資料
    profile.value = value;
  });

  //嘗試抓取進入網址的參數，如果有表示他是從分享連結進來的
  sId.value = route.query.s;
  if (sId.value) {
    //根據傳進來的資料作處理
    await HasPGotoGroupPage();
  }

  //解除讀取狀態
  isLoading.value = false;
});

//如果是帶參數進入方式
const HasPGotoGroupPage = async () => {
  try {
    const tokenRef = doc(db, "TokenList", sId.value);
    const tokenSnap = await getDoc(tokenRef);

    if (tokenSnap.exists()) {
      const data = tokenSnap.data();
      const date = new Date(data.date.seconds * 1000); // 轉換為毫秒
      const nowDate = new Date();
      const tmpdate = new Date(date);
      const fid = data.fid;
      const docId = data.docId;

      tmpdate.setDate(tmpdate.getDate() + 1);

      if (nowDate > tmpdate) {
        alert("連結已過期");
        await deleteDoc(tokenRef);
        liff.closeWindow();
      }

      const docRef = doc(db, "241229Test", docId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const fieldValue = docSnap.data()[fid];

        const existsMember = fieldValue.members.find((record) => {
          return record.userId === profile.value.userId;
        });

        if (!existsMember) {
          try {
            fieldValue.members.push(
              new Member(profile.value.userId, profile.value.displayName)
            );
          } catch (err) {
            alert(err);
          }

          try {
            await updateDoc(docRef, {
              [`${fid}.members`]: arrayUnion(
                new Member(
                  profile.value.userId,
                  profile.value.displayName
                ).topMap()
              ),
            })
          } catch (err) {
            alert(err)
          }
        }

        await deleteDoc(tokenRef);
        fieldValue.did = docId;
        fieldValue.id = fid;
        currentGroup.value = fieldValue;
        router.push("/group");
      }
    } else {
      alert("連結已失效");
      liff.closeWindow();
    }
  } catch (err) {
    alert(err);
  }
};

//透過按鈕的方式進入Group
const gotoGroupPage = async () => {
  isLoading.value = true;

  try {
    //讀取文件
    const docRef = doc(db, "241229Test", profile.value.userId);
    const docSnap = await getDoc(docRef);

    //建立Guid
    const RID = crypto.randomUUID();

    //將member預設填入自己
    const member = [];
    member.push(
      new Member(profile.value.userId, profile.value.displayName).topMap()
    );

    //建立分帳資料
    splitData.value = new SplitData(
      `${profile.value.displayName}的群組`,
      member
    );

    //判斷是否已經有存在這個文件有的話是做更新
    //應該可拿到建立新分帳就是新的阿XD
    if (docSnap.exists()) {
      await updateDoc(docRef, {
        [`${RID}`]: splitData.value.toMap(),
      });
    }
    //否則新增文件並新增群組
    else {
      await setDoc(docRef, {
        [`${RID}`]: splitData.value.toMap(),
      })
        .then(() => console.log("Data saved successfully"))
        .catch((err) => console.error("Error saving data:", err));
    }

    splitData.value = {
      ...splitData.value,
      id: RID,
      did: profile.value.userId,
    };
    currentGroup.value = splitData.value;

    //跳轉
    router.push({ path: "/group" });
  } catch (err) {
    alert(err + "新增資料失敗");
    isLoading.value = false;
  }
};

//前往History頁面
const gotoHistoryPage = async () => {
  isLoading.value = true;

  router.push({ path: "/history" });
};
</script>

<style scoped>
.el-container *{
  height: auto;
  text-align: center;
}

h1,
span,
a,
p {
  color: white;
  margin: 0 0 10px 0;
}

button {
  width: 100px;
  margin: 10px;
}

#btnShowHis {
  background: white;
  border: white;
  color: #2894ff;
}

#btnCreateNew {
  background: #f75000;
  border: white;
  color: white;
}

@media screen and (max-width: 700px) {
  .body {
    display: block;
    height: 100vh;
  }
}
</style>
