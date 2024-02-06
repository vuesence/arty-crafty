import { createApp } from "vue";

// import "./app/assets/styles/vars.css";
// import "./app/styles/base.css";

import "./app/assets/styles/base.css";
import "./app/assets/styles/custom.css";
import App from "./app/App.vue";
import { router } from "./app/router";
import { loadIcons } from "@/app/utils/icons";
import { initAppearance } from "@/app/composables/useAppConfig";
import { loadCategories } from "@/products/composables/useProductCatalog";
import { api } from "@/app/services/api";
import { useLocalStorage } from "@/app/composables/useLocalStorage";

import { useI18n } from "@/app/composables/useI18nLight";

// const { initI18n } = useI18n();

const app = createApp(App);
app.use(router);
loadIcons();
initAppearance();
api.init();
loadCategories();
// initI18n();
useLocalStorage().init();

await Promise.all([
  router.isReady(),
  // app.init(),
]);

app.mount("#app");
