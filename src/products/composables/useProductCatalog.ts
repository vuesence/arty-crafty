import { ref } from "vue";
import { api } from "@/app/services/api";

const productCategories = ref([]);

export async function loadCategories() {
  productCategories.value = await api.products.categories();
}

export function getCategory(categoryId) {
  return categoryId === "0" ? { title: "Избранное" } : productCategories.value.find(c => c.id === +categoryId);
}

export function useProductCatalog() {
  return { productCategories, loadCategories, getCategory };
}
