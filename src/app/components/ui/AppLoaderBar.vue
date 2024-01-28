<script setup>
import { useAppLoader } from "@/app/composables/useAppLoader";

const { loading } = useAppLoader();
</script>

<template>
  <div class="loader" :class="{ active: loading }">
    <div class="loaderBar" />
  </div>
</template>

<style scoped>
.loader {
    width: 100%;
    margin: 0;
    /* border-radius: 10px; */
    /* border: 4px solid transparent; */
    position: relative;
    /* height: 5px; */

    & .loaderBar {
        position: absolute;
        top: 0;
        right: 100%;
        bottom: 0;
        left: 0;
        background: #f99a43;
        width: 0;
        display: none;
        height: 5px;
        animation: borealisBar 2s linear infinite;
        .active & {
            display: block;
        }
    }
}

@keyframes borealisBar {
    0% {
        left: 0%;
        right: 100%;
        width: 0%;
    }

    10% {
        left: 0%;
        right: 75%;
        width: 25%;
    }

    90% {
        right: 0%;
        left: 75%;
        width: 25%;
    }

    100% {
        left: 100%;
        right: 0%;
        width: 0%;
    }
}
</style>
