<script setup lang="ts">
import { onMounted, ref } from "vue";
import { api } from "@/app/services/api";

import { useI18n } from "@/app/composables/useI18nLight";

const { t, locales, locale, setLocale } = useI18n();

function changeLocale() {
  setLocale(locales.find(l => l.code !== locale.value.code).code);
}

interface IOption {
  name: string
  value: string
}

const apiData = ref();

onMounted(async () => {
  apiData.value = await api.utils.testRest();
});

const options: IOption[] = [{ name: "Project name", value: "arty-crafty" }, { name: "Splash screen", value: "true" }, { name: "PWA", value: "true" }, { name: "Open graph meta tags", value: "true" }, { name: "Google Analytics", value: "false" }, { name: "Github Actions Workflow", value: "true" }, { name: "App Layout", value: "MainLayout" }, { name: "Navigation drawer", value: "TouchSlideoutDrawer" }, { name: "Navbar", value: "MantineSimpleNavbar" }, { name: "Header", value: "MantineSimpleHeader" }, { name: "Footer", value: "MantineSimpleFooter" }, { name: "undefined", value: "true" }, { name: "REST API adapter", value: "true" }, { name: "JSON-RPC", value: "false" }];
</script>

<template>
  <div>
    <h2>Congratulations with scaffolding your vue webapp!</h2>
    <h3 v-if="options.length">
      Selected options:
    </h3>
    <ul>
      <li
        v-for="option in options"
        :key="option.name"
        :class="{ dimmed: option.value === 'false' }"
      >
        <span class="name">{{ option.name }}</span>
        <span class="value">{{ option.value }}</span>
      </li>
    </ul>
    <hr />
    <h3>API data:</h3> <p>{{ apiData }}</p>
    <div>
      i18n test -
      <button
        type="button"
        @click="changeLocale()"
      >
        {{ t('msg') }} ({{ locale.code }})
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
ul {
  color: var(--vwa-c-text-2);
  border: 1px solid var(--vwa-c-divider);
  margin-bottom: 2em;
  li {
    padding: .4rem;
    display: flex;
    &:nth-child(even) {
      background-color: var(--vwa-c-bg-alt);
    }
    &.dimmed {
      opacity: 0.5;
    }
    span {
      width: 50%;
    }
  }
}
button {
  padding: 0.3em 1em;
}
</style>
