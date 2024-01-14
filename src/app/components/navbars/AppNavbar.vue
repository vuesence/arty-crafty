<script setup lang="ts">
import BaseIcon from "@/app/components/ui/BaseIcon.vue";
import { useAppConfig } from "@/app/composables/useAppConfig";

const { closeDrawer } = useAppConfig();

function onLinkClick(event, navigate) {
  closeDrawer();
  navigate(event);
}

const links = [
  { title: "Декорация", route: { name: "category", params: { categoryId: 3 } } },
  { title: "Войлочные", route: { name: "category", params: { categoryId: 6 } } },
  { title: "Aмигуруми", route: { name: "category", params: { categoryId: 5 } } },
  { title: "Композиция", route: { name: "category", params: { categoryId: 7 } } },
];

const footerLinks = [
  { name: "home", label: "Change account", icon: "change-account" },
  { name: "home", label: "Logout", icon: "logout" },
];
</script>

<template>
  <nav class="navbar">
    <div class="main">
      <ul>
        <li v-for="link in links" :key="link.title">
          <router-link v-slot="{ href, navigate }" :to="link.route" custom>
            <!-- <BaseIcon size="24" :name="link.icon" class="icon" fill1="currentColor" /> -->
            <a role="link" :href="href" @click="onLinkClick($event, navigate)">{{ link.title }}</a>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="footer">
      <ul>
        <li v-for="link in footerLinks" :key="link.label">
          <router-link v-slot="{ href, navigate }" :to="{ name: link.name }" custom>
            <BaseIcon size="24" :name="link.icon" class="icon" />
            <a role="link" :href="href" @click="onLinkClick($event, navigate)">{{ link.label }}</a>
          </router-link>
        </li>
      </ul>
    </div>
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
    ul {
      list-style-type: none;
      padding-left: 0;

      li {
        line-height: 3em;
        padding-left: 1em;
        display: flex;
        align-items: center;
        color: var(--vwa-c-text-2);
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
        /* // .icon {
        //   color: var(--vwa-c-text-1)
        // } */
      }

    }
  }
  .main {
    padding-bottom: 2em;
  }
  .footer {
    /* // padding-top: 1em; */
    margin-top: 1em;
    padding-top: 0.7rem;
    border-top: 1px solid var(--vwa-c-divider);

  }
}
</style>
