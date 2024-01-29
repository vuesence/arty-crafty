<script setup lang="ts">
import { ref, watch } from "vue";
import ProductGallery from "../components/ProductGallery.vue";
import { api } from "@/app/services/api";
import { useAppLoader } from "@/app/composables/useAppLoader";

const props = defineProps({
  productId: {
    type: Number,
    // default: "0",
  },
});

const product = ref<Product>();

const { startLoading, stopLoading } = useAppLoader();

watch(() => props.productId, async () => {
  startLoading();
  product.value = await api.products.product(props.productId);
  stopLoading();
}, { immediate: true });
</script>

<template>
  <div v-if="product">
    <h1>{{ product.title }}</h1>
    <ProductGallery :product="product" />

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
