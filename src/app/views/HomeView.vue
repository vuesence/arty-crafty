<script setup lang="ts">
import { onMounted, ref } from "vue";
import emblaCarouselVue from "embla-carousel-vue";

const [emblaNode] = emblaCarouselVue({ dragFree: true, loop: true, slidesToScroll: "auto", containScroll: "trimSnaps" });
// import { api } from "@/app/services/api";

onMounted(async () => {
  // apiData.value = await api.utils.testRest();
});
</script>

<template>
  <div>
    <h1>Arty Crafty</h1>
    <p>Добро пожаловать в магазин игрушек ручной работы Arty Crafty</p>

    <!-- <img src="/api/toy3.jpg" alt="Лисички"> -->
  </div>
  <div ref="emblaNode" class="embla">
    <div class="embla__container">
      <div v-for="i in 4" :key="i" class="embla__slide">
        <img :src="`/arty-crafty/api/toy${i}.jpg`" alt="">
      </div>
      <!-- <div class="embla__slide">
        Slide 1
      </div>
      <div class="embla__slide">
        Slide 2
      </div>
      <div class="embla__slide">
        Slide 3
      </div> -->
      <!-- <img src="/api/toy1.jpg" alt="">
      <img src="/api/toy2.jpg" alt="">
      <img src="/api/toy3.jpg" alt=""> -->
    </div>
  </div>
</template>

<style scoped>
img {
  margin: 4em auto;
}

.embla {
  /* max-width: 800px; */
  overflow-x: hidden;
}
.embla__viewport {
  overflow: hidden;
}

.embla__container {
  display: flex;
}

.embla__slide {
  flex: 0 0 33%;
  margin-right: 10px;
}

.mobile .embla__slide {
  flex: 0 0 50%;
  margin-right: 10px;
}

.embla__buttons {
  margin-top: 20px;
}

.embla__dots {
  margin-top: 20px;
}

.embla__dot--active {
  background-color: red;
}
</style>
