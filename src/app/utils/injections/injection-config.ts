import type { IHtmlInjectionConfig } from "vite-plugin-html-injection";

export const htmlInjectionConfig: IHtmlInjectionConfig = {
  injections: [
    {
      name: "Open Graph",
      path: "./src/app/utils/injections/open-graph.html",
      type: "raw",
      injectTo: "head",
      buildModes: "both",
    },
    {
      name: "Splash screen",
      path: "./src/app/utils/injections/splash-screen.html",
      type: "raw",
      injectTo: "body-prepend",
    },
    {
      name: "Service worker",
      path: "./src/app/utils/injections/sw.js",
      type: "js",
      injectTo: "head",
    },
  ],
};
