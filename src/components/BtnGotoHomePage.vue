<template>
  <div>
    <el-button type="danger" size="small" :icon="Close" circle @click="gotoHomePage" />
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { Close } from "@element-plus/icons-vue";

const router = useRouter();

const gotoHomePage = () => {
  router.push("/");
};
</script>

<style scoped>
div{
  position: absolute;
  left: 0;
}
</style>