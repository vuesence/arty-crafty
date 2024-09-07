<script setup lang="ts">
import { onMounted, ref, useId, watch } from "vue";
import ProductCard from "../components/ProductCard.vue";
import { api } from "@/app/services/api";
import { useProductCatalog } from "@/products/composables/useProductCatalog";
import { useFavourites } from "@/products/composables/useFavourites";
import { useAppLoader } from "@/app/composables/useAppLoader";

const props = defineProps({
  categoryId: {
    type: Number,
    default: -1,
  },
});

const { startLoading, stopLoading } = useAppLoader(useId());

const products = ref();
const scrollComponent = ref(null);

// const route = useRoute();
const { getCategory } = useProductCatalog();
const { listFavourites } = useFavourites();

// watch(route, async () => {
watch(() => props.categoryId, async () => {
  // console.log(route.params.categoryId);
  products.value = [];
  startLoading();
  if (props.categoryId === 0) {
    products.value = await api.products.products(listFavourites());
  } else {
    products.value = await api.products.categoryProducts(props.categoryId);
  }
  stopLoading();
}, { immediate: true });

onMounted(async () => {
  // products.value = await api.products.categoryProducts(3);
});
</script>

<template>
  <div>
    <h2>{{ getCategory(props.categoryId)?.title }}</h2>
    <!-- <div ref="scrollComponent"> -->
    <TransitionGroup ref="scrollComponent" name="list" tag="div" class="products">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        class="product-card"
      />
    </TransitionGroup>
    <!-- </div> -->
  </div>
</template>

<style scoped>
h2 {
  text-align: center;
}
.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 1em;
  gap: 2rem;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
  /* transition: opacity 1.5s ease; */
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transition: all 0.1s ease;
  /* transform: translateX(30px); */
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
