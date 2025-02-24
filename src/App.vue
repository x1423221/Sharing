<template>
  <div v-if="isLoading" class="overlay">
    <div class="spinner"></div>
    <span class="txtLoading">Loading</span>
  </div>
  <router-view></router-view>
</template>

<script setup>
import { provide, ref, reactive } from "vue";

const isLoading = ref(false);
const profile = ref({});
const currentGroup = reactive({});
const MemberList = reactive({});

//設定給子元件使用
provide("isLoading", isLoading);
provide("profile", profile);
provide("currentGroup", currentGroup);
provide("MemberList", MemberList);
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.spinner {
  border: 5px solid rgba(255, 255, 255, 0.3);
  border-top: 5px solid white;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}

.txtLoading {
  color: white;
}

@keyframes spin {
  0% {
    transform: rotate(0deg); /* 初始位置 */
  }
  100% {
    transform: rotate(360deg); /* 完成一整圈 */
  }
}
</style>
