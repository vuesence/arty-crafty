<script setup lang="ts">
import { onMounted, ref } from "vue";

// import { api } from "@/app/services/api";

onMounted(async () => {
  // apiData.value = await api.utils.testRest();
});
</script>

<template>
  <div>
    <h1>Arty Crafty</h1>
    <p>Добро пожаловать в магазин игрушек ручной работы Arty Crafty</p>

    <img src="/api/toy3.jpg" alt="Лисички">
  </div>
</template>

<style scoped>
h1, p {
  text-align: center;
}
img {
  margin: 4em auto;
}
</style>
