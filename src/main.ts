import { createApp } from "vue";
import "./app/assets/styles/base.css";
import "./app/assets/styles/custom.css";
import { onFCP, onFID, onLCP } from "web-vitals";
import App from "./app/App.vue";
import { router } from "./app/router";
import { init } from "@/app/utils/init";

onLCP(console.log);
onFCP(console.log);
onFID(console.log);

const app = createApp(App);
app.use(router);
init();

await Promise.all([
  router.isReady(),
  // app.init(),
]);

app.mount("#app");
