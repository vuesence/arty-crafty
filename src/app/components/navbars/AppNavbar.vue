<script setup lang="ts">
import { useRouter } from "vue-router";
import BaseIcon from "@/app/components/ui/BaseIcon.vue";
import { useAppConfig } from "@/app/composables/useAppConfig";
import { useProductCatalog } from "@/products/composables/useProductCatalog";
import { slug } from "@/app/utils/slug";

const { closeDrawer } = useAppConfig();
const { productCategories } = useProductCatalog();
const router = useRouter();

function onLinkClick(event, navigate) {
  closeDrawer();
  navigate(event);
}

const footerLinks = [
  { name: "home", label: "Change account", icon: "change-account" },
  { name: "home", label: "Logout", icon: "logout" },
];

function gotoProductCategory(id) {
  router.push({ name: "category", params: { categoryId: id } });
  closeDrawer();
}
</script>

<template>
  <nav class="navbar">
    <div class="main">
      <h3 class="title">
        Arty Crafty
      </h3>
      <p class="desc">
        Магазин креативных игрушек<br /> ручной работы
      </p>
      <hr>
      <ul class="menu">
        <li
          v-for="category in productCategories"
          :key="category.id"
          class="menu-item"
          @click="gotoProductCategory(`${category.id}-${slug(category.title)}`)"
        >
          <!-- <router-link v-slot="{ href, navigate }" :to="link.route" custom> -->
          <!-- <BaseIcon size="24" :name="link.icon" class="icon" fill1="currentColor" /> -->
          <!-- <a role="link" :href="href" @click="onLinkClick($event, navigate)">{{ link.title }}</a>
             -->
          <BaseIcon size="34" :name="`toy-${category.id}`" class="icon" />
          {{ category.title }}
          <!-- </router-link> -->
        </li>
      </ul>
    </div>
    <!-- <div class="footer">
      <ul class="menu">
        <li v-for="link in footerLinks" :key="link.label" class="menu-item">
          <router-link v-slot="{ href, navigate }" :to="{ name: link.name }" custom>
            <BaseIcon size="24" :name="link.icon" class="icon" />
            <a role="link" :href="href" @click="onLinkClick($event, navigate)">{{ link.label }}</a>
          </router-link>
        </li>
      </ul>
    </div> -->
  </nav>
</template>

<style scoped>
.navbar {
  min-width: 220px;
  padding: 1em;

  .notebook & {
    min-width: 220px;
  }

  .main, .footer {
    .menu {
      list-style-type: none;
      padding-left: 0;

      .menu-item {
        line-height: 3em;
        padding-left: 1em;
        display: flex;
        align-items: center;
        color: var(--vwa-c-text-2);
        cursor: pointer;
        /* // border-bottom: solid 1px var(--vwa-c-divider); */
        &:hover {
          color: var(--vwa-c-text-1);
          background-color: var(--vwa-c-bg-alt);
        }

        a {
          cursor: pointer;
          display: block;
          padding: 0 2em 0 1em;
          color: var(--vwa-c-text-2);
          text-wrap: nowrap;
        }
        .icon {
          margin-right: 1em;
        }
      }

    }
  }
  .main {
    padding-bottom: 2em;
    .title {
      text-align: center;
      margin: 0.5rem;
    }
    .desc {
      text-align: center;
      color: var(--vwa-c-text-3);
      margin: 0.3rem;
      font-size: 0.9rem;
    }
    hr {
      border: 1px solid var(--vwa-c-divider);
      width: 90%;
      margin-bottom: 2rem;
    }
  }
  .footer {
    /* // padding-top: 1em; */
    margin-top: 1em;
    padding-top: 0.7rem;
    border-top: 1px solid var(--vwa-c-divider);

  }
}
</style>
