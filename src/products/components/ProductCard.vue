<script setup lang="ts">
import { useRouter } from "vue-router";
import BaseIcon from "@/app/components/ui/BaseIcon.vue";
import { useFavourites } from "@/products/composables/useFavourites";

const props = defineProps({
  product: {
    type: Object,
    default: () => { },
  },
});

const router = useRouter();
const { toggleFavourite, listFavourites, isInFavourites } = useFavourites();

function gotoProduct() {
  router.push({ name: "product", params: { productId: props.product.id } });
}
function addToCart() {
  console.log("addToCart", props.product);
  toggleFavourite(props.product.id);
}
</script>

<template>
  <div class="product-card">
    {{ listFavourites() }}
    <div class="images">
      <img :src="`/arty-crafty/api/${product.images[0]}`" :alt="product.title" @click="gotoProduct()">
      <BaseIcon
        size="50"
        name="favourite"
        class="favourite-icon"
        :class="{ selected: isInFavourites(product.id) }"
        :fill="isInFavourites(product.id) ? 'currentColor' : 'none'"
        @click="toggleFavourite(props.product.id)"
      />
    </div>
    <div class="description">
      <h2 class="title">
        {{ product.title }}
      </h2>
      <div class="desc">
        {{ product.desc }}
      </div>
      <div class="price-wrapper" @click="addToCart()">
        <div class="price">
          {{ product.price }} <span class="currency-symbol">₽</span>
        </div>
        <!-- <button class="add-to-cart-button" type="button" title="Add to cart">
          <BaseIcon size="20" name="add-to-cart" class="icon" fill1="white" />
        </button> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-card {
  border: 1px solid var(--vwa-c-divider);
  border-radius: 3px;
  cursor: pointer;
  width: 15rem;
  .mobile & {
    width: 100%;
  }

  .images {
    position: relative;
    img {
      max-width: 100%;
      border-top-right-radius: 3px;
      border-top-left-radius: 3px;
    }
    .favourite-icon {
      position: absolute;
      top: 0;
      right: 0;
      padding: 10px;
      margin: 1rem;
      transition: all 0.1s ease-in-out;
      color: red !important;
      // &.selected {
      //   color: red !important;
      // }
    }
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
