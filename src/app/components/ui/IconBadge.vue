<script setup>
defineProps({
  value: {
    type: Number,
    default: 0,
  },
});
</script>

<template>
  <span v-if="value > 0" class="badge">{{ value }}</span>
</template>

<style scoped>
.badge {
  position: absolute;
  top: -5px;
  right: -5px;
  border-radius: 50%;
  background-color: red;
  font-size: 8px;
  color: white;
  line-height: 7px;
  padding: 3px 5px;;
}
</style>
