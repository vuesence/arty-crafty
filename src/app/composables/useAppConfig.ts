import { ref, watch } from "vue";

const isDrawerOpen = ref(false);
const isDarkTheme = ref(false);

watch(isDarkTheme, () => {
  if (isDarkTheme.value) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
});

// export function initAppearance() {
// document.documentElement.classList.add("dark");
// const preference = localStorage.getItem(APPEARANCE_KEY) || "";
// const preference = "";
// const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
// if (!preference || preference === "auto" ? prefersDark : preference === "dark") {
//   document.documentElement.classList.add("dark");
// };
// }

export function useAppConfig() {
  function closeDrawer() {
    isDrawerOpen.value = false;
  }

  return {
    isDrawerOpen,
    isDarkTheme,
    closeDrawer,
    // initAppearance,
  };
}
