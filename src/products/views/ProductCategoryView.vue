<script setup lang="ts">
import { onMounted, ref } from "vue";
import ProductCard from "../components/ProductCard.vue";
import { api } from "@/app/services/api";
import BaseIcon from "@/app/components/ui/BaseIcon.vue";

const products = ref();
const scrollComponent = ref(null);

onMounted(async () => {
  products.value = await api.products.categoryProducts(3);
});
</script>

<template>
  <div>
    <h2>Category name</h2>
    <div ref="scrollComponent" class="products">
      <ProductCard v-for="product in products" :key="product.id" :product="product" class="product-card">
      </ProductCard>
    </div>
  </div>
</template>

<style scoped>
.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 1em;
  gap: 2rem;
}
</style>

<!--

  // &::after {
  //   content: "";
  //   flex: auto;
  // }
  // .product-card {
  // }

const portionSize = 40;
const portion = ref(1);
const visibleGames = computed(() => {
  return casinoService.games.value.slice(0, portionSize * portion.value);
});

watch(casinoService.games, () => {
  portion.value = 1;
});

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

function handleScroll() {
  if (scrollComponent.value.getBoundingClientRect().bottom < window.innerHeight) {
    // console.log("2: " + new Date().toISOString());

    portion.value++;
    // console.log("adding: " + portion.value);
  }
} -->
