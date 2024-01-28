<script setup lang="ts">
import { ref, watch } from "vue";
import ProductCardImage from "../components/ProductCardImage.vue";
import { api } from "@/app/services/api";
import { useAppLoader } from "@/app/composables/useAppLoader";

const props = defineProps({
  productId: {
    type: Number,
    // default: "0",
  },
});

const product = ref();

const { startLoading, stopLoading } = useAppLoader();

watch(() => props.productId, async () => {
  // console.log(route.params.categoryId);
  startLoading();
  product.value = await api.products.product(props.productId);
  stopLoading();
}, { immediate: true });
</script>

<template>
  <div v-if="product">
    <h2>{{ product.title }}</h2>
    <ProductCardImage :product="product" />

    <div class="desc">
      {{ product.summary.shortDesc }}
    </div>
    <div class="desc">
      {{ product.data.description }}
    </div>
    <div class="price-wrapper">
      <div class="price">
        {{ product.summary.price }} <span class="currency-symbol">₽</span>
      </div>
      <!-- <button class="add-to-cart-button" type="button" title="Add to cart">
          <BaseIcon size="20" name="add-to-cart" class="icon" fill1="white" />
        </button> -->
    </div>
  </div>
</template>

<style scoped></style>
