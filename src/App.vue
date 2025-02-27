<template>
  <router-view></router-view>
</template>

<script setup>
import { provide, ref, reactive, watch } from "vue";
import { ElLoading } from 'element-plus'

const isLoading = ref(true);
const profile = ref({});
const currentGroup = reactive({});
const MemberList = reactive({});

//設定給子元件使用
provide("isLoading", isLoading);
provide("profile", profile);
provide("currentGroup", currentGroup);
provide("MemberList", MemberList);

watch(isLoading , (newValue)=>{
  const Loading = ElLoading.service({
    lock: true,
    text: 'Loading',
    background: 'rgba(0, 0, 0, 0.7)',
  })

  if(!newValue){
    Loading.close();
  }
})
</script>
