<script setup lang="ts">
import { useRouter } from "vue-router";
import ProductCardImage from "./ProductCardImage.vue";
import BaseIcon from "@/app/components/ui/BaseIcon.vue";
import { slug } from "@/app/utils/slug";
import { useShoppingCart } from "@/cart/composables/useShoppingCart";

const props = defineProps<{
  product: Product
}>();

const router = useRouter();
const cart = useShoppingCart();

function gotoProduct() {
  router.push({ name: "product", params: { productId: `${props.product.id}-${slug(props.product.title)}` } });
}
function addToCart() {
  console.log("addToCart", props.product);
  cart.add(props.product);
}
</script>

<template>
  <div class="product-card">
    <ProductCardImage :product="product" @click="gotoProduct()" />
    <div class="description">
      <div class="summary">
        <h2 class="title">
          {{ product.title }}
        </h2>
        <div class="desc">
          {{ product.summary.shortDesc }}
        </div>
      </div>
      <div
        class="price-wrapper"
        role="button"
        tabindex="0"
        @click="addToCart()"
        @keydown="addToCart()"
      >
        <div class="price">
          {{ product.summary.price }} <span class="currency-symbol">₽</span>
        </div>
        <button class="add-to-cart-button" type="button" title="Add to cart">
          <BaseIcon size="24" name="add-to-cart" class="icon" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-card {
  border: 1px solid var(--vwa-c-divider);
  border-radius: 3px;
  cursor: pointer;
  width: 15rem;
  .mobile & {
    width: 100%;
  }
  .description {
    padding: 0.4rem;

    .title {
      margin: 0.5rem 0;
    }
    .desc {
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
        padding: 8px;
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
