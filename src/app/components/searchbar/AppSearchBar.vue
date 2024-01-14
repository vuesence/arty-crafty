<script setup>
import BaseIcon from "@/app/components/ui/BaseIcon.vue";

// const modelValue = defineModel();
</script>

<template>
  <div class="search-bar">
    <div class="search-field">
      <input class="" name="search" type="text" value="" placeholder="Search.." autocomplete="off">
    </div>
    <div class="search-button">
      <button class="">
        <BaseIcon size="20" name="search" class="icon" fill="white" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.search-bar {
    display: flex;
    transition: all 0.3s ease-in-out;
    .search-field {
        overflow: hidden;
        height: 100%;

        input {
            width: 100%;
            height: 100%;
            padding: 5px 19px;
            font-size: 15px;
            vertical-align: middle;
            background-color: var(--vwa-c-bg-soft);
            /* // border: 1px solid var(--vwa-c-border); */
            border: 1px solid var(--vwa-c-divider);
            border-right: 0;
            border-radius: 4px 0 0 4px;
            line-height: 1;
            outline: 0;
            box-shadow: none;
            appearance: none;
            transition: all 0.3s ease-in-out;
        }
    }

    .search-button {
        position: relative;
        /* // height: 100%; */

        button {
            height: 100%;
            background-color: #f8d9bd ;
            /* // border: none; */
            border-radius: 0 4px 4px 0;
            border-color: var(--vwa-c-divider);
            cursor: pointer;
            color: var(--vwa-c-bg-soft);
            padding: 0.10em 1.5em;
            display: flex;
            align-items: center;
            user-select: none;
            transition: all 0.3s ease-in-out;
        }
    }
    &:focus-within {
        & button {
            /* // color: var(--group-color-focus); */
            background-color: #f99a43 ;
            /* // border-color: #777; */
            border-color: #f99a43 ;
        }
        & input {
            /* // color: var(--group-color-focus); */
            border-color: #f99a43 ;
        }
    }
}
</style>
