// import { initAppearance } from "@/app/composables/useAppConfig";
import { loadIcons } from "@/app/utils/icons";
import { loadCategories } from "@/products/composables/useProductCatalog";
import { useLocalStorage } from "@/app/composables/useLocalStorage";
import { api } from "@/app/services/api";
import { useFavourites } from "@/products/composables/useFavourites";
import { useAppConfig } from "@/app/composables/useAppConfig";

// import { useI18n } from "@/app/composables/useI18nLight";
// const { initI18n } = useI18n();
const { favourites } = useFavourites();
const { isDarkTheme } = useAppConfig();
const ls = useLocalStorage();

export function init() {
  ls.init();
  ls.observe("favourites", favourites);
  ls.observe("isDarkTheme", isDarkTheme);

  loadIcons();
  api.init();
  loadCategories();

  // initI18n();
}
