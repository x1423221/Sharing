<template>
  <el-container>
    <el-header>
      <div class="title-container">
        <BtnGotoHomePage></BtnGotoHomePage>
        <div>
          <span>歷史紀錄</span>
        </div>
      </div>
    </el-header>
    <el-main>
      <el-scrollbar height="100%" wrap-style="overflow-x: hidden;">
        <el-card v-for="(item, index) in historyDocs" :key="index" :class="{ hidden: cardisNew[item.id] }"
          :style="cardStyle[item.id]">
          <template #header>
            <div class="card-header">
              <span>{{ item.name }}</span>
            </div>
          </template>
          <p>{{ item.date }}</p>
          <el-button type="success" @click="gotoGroup(index)">
            前往{{ item.name }}
          </el-button>
        </el-card>
      </el-scrollbar>
    </el-main>
  </el-container>
</template>

<script setup>
import { inject, onMounted, ref, reactive } from "vue";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useRouter } from "vue-router";
import { setCardStyle } from "@/Models/SplitModels";
import BtnGotoHomePage from "./BtnGotoHomePage.vue";


const router = useRouter();

//取得父元件的資料
const isLoading = inject("isLoading");
const profile = inject("profile");
const currentGroup = inject("currentGroup");
const cardStyle = reactive({});
const cardisNew = reactive({});

const historyDocs = ref([]);

//註冊階段
onMounted(async () => {
  try {
    //取得分帳資料集合內的所有文件
    const firebase = getFirestore();
    const SplitCols = collection(firebase, "241229Test");
    const SplitDocs = await getDocs(SplitCols);
    //過濾出文件Id是自己或者members中有自己的資料
    SplitDocs.forEach((doc) => {
      const docData = doc.data();
      //過濾文件id是自己的
      if (doc.id === profile.value.userId) {
        //將docData轉成陣列再使用map轉出特定格式資料
        const tmpdata = Object.entries(docData).map(([key, value]) => ({
          did: doc.id,
          id: key,
          ...value,
        }));

        //將轉為的資料新增至historyDocs.value
        historyDocs.value = [...historyDocs.value, ...tmpdata];
        return; // 直接跳過後續篩選
      }

      //上面都沒進去的話，過濾members欄位中有自己的
      const filteredGroups = Object.entries(docData).filter(([key, value]) => {
        console.log(key)
        // 篩選 `members` 陣列是否包含 `userId.value`
        return value.members.filter(item => item.userId === profile.value.userId).length > 0
      }).map(([key, value]) => ({
        did: doc.id,
        id: key, // 確保 `id` 是單獨的欄位
        ...value,
      }));

      historyDocs.value = [...historyDocs.value, ...filteredGroups];
    });

    historyDocs.value.sort((a, b) => new Date(b.date) - new Date(a.date))
    setCardStyle(historyDocs.value, cardStyle, cardisNew);
    isLoading.value = false;
  } catch (err) {
    alert(err);
  }
});

const gotoGroup = (index) => {
  currentGroup.value = historyDocs.value[index];
  router.push("/group");
};
</script>

<style scoped src="../../public/Page.css"></style>
