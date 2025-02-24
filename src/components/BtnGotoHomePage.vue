<template>
  <button
    id="btnGoHome"
    class="btn btn-danger d-flex align-items-center justify-content-center"
    @click="gotoHomePage"
  >
    <i class="bi bi-x-lg"></i>
  </button>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const gotoHomePage = () => {
  router.push("/");
};
</script>
