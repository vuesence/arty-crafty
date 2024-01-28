<script lang="ts" setup>
import IconBadge from "@/app/components/ui/IconBadge.vue";
import BaseIcon from "@/app/components/ui/BaseIcon.vue";

defineProps({
  title: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "",
  },
  badge: {
    type: Number,
    default: 0,
  },
});
</script>

<template>
  <button class="button">
    <span class="icon-wrapper">
      <BaseIcon size="20" :name="icon" class="icon" />
      <IconBadge :value="badge" />
    </span>
    <span class="title">{{ title }}</span>
  </button>
</template>

<style scoped>
.button {
    border: 0;
    /* // color: var(--vwa-c-text-2); */
    color: var(--vwa-c-border);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0.3rem;
    transition: all 0.3s ease-in-out;
    .active & {
        color: var(--vwa-c-text-2);
    }
    .icon-wrapper {
        position: relative;
        margin-top: 5px;
    }
    .title {
        font-weight: 300;
        font-size: 0.8rem;
    }

    &:hover {
        color: var(--vwa-c-text-2);
    }

    /* .mobile &,
          .tablet & {
            display: none;
          } */
}
</style>
