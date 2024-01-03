import { createApp } from "vue";

// import "./assets/styles/vars.css";
// import "./styles/base.css";

import "./assets/styles/base.scss";
import "./assets/styles/custom.scss";
import App from "./App.vue";
import { router } from "./router";
import { loadIcons } from "@/utils/icons";
import { initAppearance } from "@/composables/useAppConfig";
import { api } from "@/services/api";

import { useI18n } from "@/composables/useI18nLight";

const { initI18n } = useI18n();

const app = createApp(App);
app.use(router);
loadIcons();
initAppearance();
api.init();
initI18n();

await Promise.all([router.isReady()]);

app.mount("#app");
