<script setup lang="ts">
// import BaseIcon from "@/app/components/ui/BaseIcon.vue";
// import { useFavourites } from "@/products/composables/useFavourites";
import { ref } from "vue";

const props = defineProps({
  product: {
    type: Object,
    default: () => { },
  },
});

const selectedImage = ref(1);
const show = ref(true);

// const { toggleFavourite, isInFavourites } = useFavourites();
</script>

<template>
  <div class="product-gallery">
    <nav class="thumbnails">
      <button
        v-for="(image, index) in product.summary.images"
        :key="index"
        class="thumbnail"
        :class="{ active: index === selectedImage }"
        @click="selectedImage = index;"
      >
        <img
          :src="`/arty-crafty/api/${image.file}`"
          :alt="image.title"
        >
      </button>
    </nav>
    <article class="product-image">
      <Transition mode="out-in">
        <img :key="selectedImage" :src="`/arty-crafty/api/${product.summary.images[selectedImage].file}`" :alt="product.title">
        <!-- <img v-if="show" :src="`/arty-crafty/api/${product.summary.images[selectedImage].file}`" :alt="product.title"> -->
      </Transition>
    </article>
  </div>
</template>

<style scoped>
.product-gallery {
  padding: 1rem;
  display: flex;

  .mobile &, .tablet & {
    flex-direction: column-reverse;
  }
  .thumbnails {
    display: flex;
    flex-direction: column;
    .mobile &, .tablet & {
      flex-direction: row;
    }
    .thumbnail {
      width: 100px;
      margin: 0 1rem 1rem;
      padding: 2px;
      border: 2px solid transparent;
      border-radius: 3px;
      transition: border .2s ease-in-out;
      cursor: pointer;
      .mobile &, .tablet & {
        margin: 0 1rem 1rem 0;
      }
      &.active {
        border-color: #f99a43;
      }
      img {
        box-shadow: 2px 2px 8px 0px rgb(161 161 161 / 50%);
      }
    }

  }
  .product-image {
    margin: 0 0 1rem 1rem;
    box-shadow: 2px 2px 8px 0px rgb(161 161 161 / 50%);
    .mobile &, .tablet & {
      margin: 0 0 1rem 0;
    }
  }

}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.15s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
