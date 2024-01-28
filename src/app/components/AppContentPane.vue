<script setup lang="ts">
// import { onMounted, ref, watch } from "vue";
</script>

<template>
  <main class="main-content">
    <router-view />

    <!-- <router-view v-slot="{ Component }">
      <Transition name="fade">
        <component :is="Component" />
      </Transition>
    </router-view> -->

    <!-- <div class="content" /> -->
  </main>
</template>

<style scoped>
.main-content {
  padding: 1em 2em;
  width: 100%;
}
/* .v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
} */
</style>
