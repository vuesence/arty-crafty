<script setup lang="ts">
// import { useRouter } from "vue-router";
// import IconBadge from "@/app/components/ui/IconBadge.vue";
import { router } from "../router";
import { useFavourites } from "@/products/composables/useFavourites";

// import { slug } from "@/app/utils/slug";
// import AppSearchBar from "@/app/components/searchbar/AppSearchBar.vue";
import BaseIcon from "@/app/components/ui/BaseIcon.vue";
import BaseIconButton from "@/app/components/ui/BaseIconButton.vue";

// import HamburgerIcon from "@/app/components/ui/HamburgerIcon.vue";
import { useAppConfig } from "@/app/composables/useAppConfig";

// import { useProductCatalog } from "@/products/composables/useProductCatalog";

// // import ThemeToggle from "@/app/components/ui/ThemeToggle.vue";
const { isDrawerOpen } = useAppConfig();
const { listFavourites } = useFavourites();
// const { productCategories } = useProductCatalog();
// const router = useRouter();

const navItems = [
  // { title: "Избранное", icon: "favourites", route: { name: "favourites" } },
  { title: "Главная", icon: "home", handler: () => goto("home") },
  { title: "Каталог", icon: "catalog", handler: () => { isDrawerOpen.value = !isDrawerOpen.value; } },
  { title: "Корзина", icon: "cart", handler: () => goto("cart") },
  { title: "Избранное", icon: "favourites", handler: () => goto("favourites") },
  { title: "Аккаунт", icon: "account", handler: () => goto("account") },
];

function goto(name: string) {
  isDrawerOpen.value = false;
  router.push({ name });
}
</script>

<template>
  <!-- <section class="mobile-menu"> -->
  <nav class="mobile-menu">
    <!-- <RouterLink v-for="item in navItems" :key="item.title" class="menu-item" :to="item.route"> -->
    <div v-for="item in navItems" :key="item.title" class="menu-item" @click="item.handler">
      <BaseIconButton
        :title="item.title"
        :icon="item.icon"
        :badge="item.icon === 'favourites' ? listFavourites().length : 0"
      />
    </div>
  </nav>
  <!-- </section> -->
</template>

<style scoped>
.mobile-menu {
  height: 52px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--vwa-c-bg);
  box-shadow: 0 0 28px rgba(52,0,0,0.15);
  z-index: 99999;
  padding: 5px 10px 0;
  /* transition-delay: 0.3s; */
  .desktop &, .notebook & {
    display: none;
  }
  /* .menu-item {} */
}
</style>
