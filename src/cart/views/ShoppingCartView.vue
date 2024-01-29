<script setup lang="ts">
import ProductCard from "../../products/components/ProductCard.vue";

// import { onMounted, ref } from "vue";
import { useShoppingCart } from "@/cart/composables/useShoppingCart";

const cart = useShoppingCart();
</script>

<template>
  <div>
    <h1>Ваша корзина</h1>
    <!-- <p>Добро пожаловать в магазин игрушек ручной работы Arty Crafty</p> -->

    <div v-for="cartItem in cart.list()" :key="cartItem.id">
      <ProductCard :product="cartItem.product" />
    </div>
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
