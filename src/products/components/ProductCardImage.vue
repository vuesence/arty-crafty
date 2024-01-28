<script setup lang="ts">
import BaseIcon from "@/app/components/ui/BaseIcon.vue";
import { useFavourites } from "@/products/composables/useFavourites";

const props = defineProps({
  product: {
    type: Object,
    default: () => { },
  },
});

const { toggleFavourite, isInFavourites } = useFavourites();
</script>

<template>
  <div class="images" :class="{ favourite: isInFavourites(product.id) }">
    <img :src="`/arty-crafty/api/${product.summary.images[0].file}`" :alt="product.title">
    <button class="favourite-button" @click.stop="toggleFavourite(props.product.id)">
      <BaseIcon
        size="24"
        name="favourite"
        :fill="isInFavourites(product.id) ? 'currentColor' : 'none'"
      />
    </button>
  </div>
</template>

<style scoped>
  .images {
    position: relative;
    img {
      width: 100%;
      max-width: 100%;
      border-top-right-radius: 3px;
      border-top-left-radius: 3px;
    }
    .favourite-button {
      position: absolute;
      top: 0;
      right: 0;
      padding: 8px;
      margin: 0.7rem;
      border: 0;
      border-radius: 50%;
      transition: all 0.3s ease-in-out;
      color: red !important;
      background-color: #ffffff50;
      cursor: pointer;
      opacity: 0;
      .mobile &, .tablet &, .favourite &, .product-card:hover & {
        opacity: 1;
      }
      /*&.favourite {
         color: red !important;
      }*/
    }
  }
</style>
