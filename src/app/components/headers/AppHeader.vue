<script setup lang="ts">
import { useRouter } from "vue-router";
import IconBadge from "@/app/components/ui/IconBadge.vue";
import { useFavourites } from "@/products/composables/useFavourites";
import AppSearchBar from "@/app/components/searchbar/AppSearchBar.vue";
import BaseIcon from "@/app/components/ui/BaseIcon.vue";
import HamburgerIcon from "@/app/components/ui/HamburgerIcon.vue";
import { useAppConfig } from "@/app/composables/useAppConfig";
import { useProductCatalog } from "@/products/composables/useProductCatalog";

// import ThemeToggle from "@/app/components/ui/ThemeToggle.vue";
const { isDrawerOpen } = useAppConfig();
const { listFavourites } = useFavourites();
const { productCategories } = useProductCatalog();
const router = useRouter();

// const links = [
//   { title: "Декорация", route: { name: "category", params: { categoryId: 3 } } },
//   { title: "Войлочные", route: { name: "category", params: { categoryId: 6 } } },
//   { title: "Aмигуруми", route: { name: "category", params: { categoryId: 5 } } },
//   { title: "Композиция", route: { name: "category", params: { categoryId: 7 } } },
// ];

const topnavItems = [
  // { title: "Избранное", icon: "favourites", route: { name: "favourites" } },
  { title: "Корзина", icon: "cart", route: { name: "cart" } },
  { title: "Войти", icon: "account", route: { name: "login" } },
];

function openCategory(id) {
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
      <!-- <div class="search-field">
        <input type="text" placeholder="Search">
      </div> -->
      <nav class="topnav">
        <!-- <ThemeToggle /> -->
        <!-- <button class="">
          <BaseIcon size="20" name="orders" class="icon" fill1="white" />
        </button> -->
        <RouterLink class="link" :to="{ name: 'favourites' }">
          <div class="item">
            <div class="icon-wrapper">
              <BaseIcon size="20" name="favourites" class="icon" />
              <IconBadge :num="listFavourites().length" />
            </div>
            <span class="title">Избранное</span>
          </div>
        </RouterLink>
        <RouterLink v-for="item in topnavItems" :key="item.title" class="link" :to="item.route">
          <div class="item-wrapper">
            <div class="item">
              <BaseIcon size="20" :name="item.icon" class="icon" fill1="white" />
              <span class="title">{{ item.title }}</span>
            </div>
          </div>
        </RouterLink>
        <HamburgerIcon v-model="isDrawerOpen" class="drawer-toggle" />
      </nav>
    </div>
    <div class="links">
      <div v-for="category in productCategories" :key="category.id" class="link" @click="openCategory(category.id)">
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

        .item {
          border: 0;
          /* // color: var(--vwa-c-text-2); */
          color: var(--vwa-c-border);
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 0 1rem;
          transition: all 0.3s ease-in-out;

          .title {
            font-weight: 300;
            font-size: 0.8rem;
          }

          &:hover {
            color: var(--vwa-c-text-2);
          }

          .mobile &,
          .tablet & {
            display: none;
          }
          .icon-wrapper {
            position: relative;
          }
        }

      .drawer-toggle {
        margin: 0 1em;

        .notebook &,
        .desktop & {
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
