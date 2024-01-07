<script setup lang="ts">
import { useRouter } from "vue-router";
import BaseIcon from "@/app/components/ui/BaseIcon.vue";

const props = defineProps({
  product: {
    type: Object,
    default: () => { },
  },
});

const router = useRouter();

function gotoProduct() {
  router.push({ name: "product", params: { productId: props.product.id } });
}
function addToCart() {
  console.log("addToCart", props.product);
}
</script>

<template>
  <div class="product-card">
    <img :src="`/arty-crafty/api/${product.images[0]}`" :alt="product.title" @click="gotoProduct()">
    <div class="description">
      <h2>{{ product.title }}</h2>
      <div class="price-wrapper" @click="addToCart()">
        <div class="price">
          {{ product.price }} <span class="currency-symbol">₽</span>
        </div>
        <button class="add-to-cart-button" type="button" title="Add to cart">
          <BaseIcon size="20" name="add-to-cart" class="icon" fill1="white" />
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-card {
  border: 1px solid var(--vwa-c-divider);
  border-radius: 3px;
  cursor: pointer;

  img {
    width: 15rem;
    border-top-right-radius: 3px;
    border-top-left-radius: 3px;
  }

  .description {
    padding: 0.4rem;

    h2 {
      margin: 0.5rem 0;
    }

    .price-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      .price {
        font-weight: 500;
        font-size: 1.2rem;

        .currency-symbol {
          color: #999;
        }
      }

      .add-to-cart-button {
        padding: 10px;
        cursor: pointer;
        border: 1px solid transparent;
        background-color: rgb(254, 114, 0);
        color: rgb(255, 255, 255);
        height: auto;
        border-radius: 50%;
      }
    }
  }
}
</style>
