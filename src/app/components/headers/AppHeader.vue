<script setup lang="ts">
import { useRouter } from "vue-router";
import { useFavourites } from "@/products/composables/useFavourites";
import { slug } from "@/app/utils/slug";
import AppSearchBar from "@/app/components/searchbar/AppSearchBar.vue";
import BaseIcon from "@/app/components/ui/BaseIcon.vue";
import BaseIconButton from "@/app/components/ui/BaseIconButton.vue";
import HamburgerIcon from "@/app/components/ui/HamburgerIcon.vue";
import { useAppConfig } from "@/app/composables/useAppConfig";
import { useProductCatalog } from "@/products/composables/useProductCatalog";

// import ThemeToggle from "@/app/components/ui/ThemeToggle.vue";
const { isDrawerOpen } = useAppConfig();
const { listFavourites } = useFavourites();
const { productCategories } = useProductCatalog();
const router = useRouter();

const topnavItems = [
  { title: "Избранное", icon: "favourites", route: { name: "favourites" } },
  { title: "Корзина", icon: "cart", route: { name: "cart" } },
  { title: "Войти", icon: "account", route: { name: "login" } },
];

function gotoProductCategory(id) {
  router.push({ name: "category", params: { categoryId: id } });
}
</script>

<template>
  <header class="header">
    <div class="main-header">
      <RouterLink :to="{ name: 'home' }">
        <div class="logo">
          <BaseIcon size="30" name="logo" class="icon" />
          <div class="title">
            Arty-Crafty
          </div>
        </div>
      </RouterLink>
      <AppSearchBar class="search-bar" />
      <nav class="topnav">
        <RouterLink v-for="item in topnavItems" :key="item.title" class="link" :to="item.route">
          <BaseIconButton
            :title="item.title" :icon="item.icon"
            :badge="item.icon === 'favourites' ? listFavourites().length : 0"
          />
        </RouterLink>
        <HamburgerIcon v-model="isDrawerOpen" class="drawer-toggle" />
      </nav>
    </div>
    <div class="links">
      <div
        v-for="category in productCategories" :key="category.id" class="link"
        @click="gotoProductCategory(`${category.id}-${slug(category.title)}`)"
      >
        {{ category.title }}
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  top: 0;
  /* // height: 4em; */
  padding: 10px 20px 3px;
  background-color: var(--vwa-c-bg);
  z-index: 3;
  border-bottom: 1px solid var(--vwa-c-divider);

  .main-header {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 0.5rem;

    /* // margin-bottom: 1em; */
    .logo {
      max-width: 200px;
      display: flex;
      align-items: center;

      .notebook &,
      .desktop & {
        width: 15rem;
      }

      .title {
        margin-left: 0.6rem;
        font-size: 1.2rem;
        font-weight: 700;
        color: var(--vwa-c-text-1);

        .mobile &,
        .tablet & {
          display: none;
        }
      }
    }

    .search-bar {
      margin: 0 0 0 1rem;
    }

    .topnav {
      display: flex;
      align-items: center;

      .mobile &,
      .tablet & {
        display: none;
      }

      .drawer-toggle {
        margin: 0 1em;

        .mobile &,
        .tablet & {
          display: none;
        }
      }
    }

  }

  .links {

    .mobile &,
    .tablet & {
      display: none;
    }

    display: flex;
    align-items: center;
    margin-top: 0.2rem;

    .link {
      font-size: 0.9em;
      font-weight: 500;
      display: block;
      line-height: 1;
      padding: 8px 12px;
      border-radius: 4px;
      text-decoration: none;
      color: var(--vwa-c-text-2);
      transition: all 0.3s ease-in-out;
      cursor: pointer;

      &:hover {
        background-color: var(--vwa-c-bg-soft);
      }
    }
  }
}
</style>
