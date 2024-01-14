import { createApp } from "vue";

// import "./app/assets/styles/vars.css";
// import "./app/styles/base.css";

import "./app/assets/styles/base.css";
import "./app/assets/styles/custom.css";
import App from "./app/App.vue";
import { router } from "./app/router";
import { loadIcons } from "@/app/utils/icons";
import { initAppearance } from "@/app/composables/useAppConfig";
import { api } from "@/app/services/api";

import { useI18n } from "@/app/composables/useI18nLight";

const { initI18n } = useI18n();

const app = createApp(App);
app.use(router);
loadIcons();
initAppearance();
api.init();
initI18n();

await Promise.all([router.isReady()]);

app.mount("#app");
