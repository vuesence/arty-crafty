import type { RouteRecordRaw } from "vue-router";
import HomeView from "@/app/views/HomeView.vue";
import ProductCategoryView from "@/products/views/ProductCategoryView.vue";
import ProductInfoView from "@/products/views/ProductInfoView.vue";
import AboutView from "@/app/views/AboutView.vue";
import ContactsView from "@/app/views/ContactsView.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/product/:productId",
    name: "product",
    component: ProductInfoView,
  },
  {
    path: "/category/:categoryId",
    name: "category",
    component: ProductCategoryView,
  },
  {
    path: "/favourites",
    name: "favourites",
    component: ProductCategoryView,
  },
  {
    path: "/cart",
    name: "cart",
    component: ProductCategoryView,
  },
  {
    path: "/login",
    name: "login",
    component: ProductCategoryView,
  },
  {
    path: "/contacts",
    name: "contacts",
    component: ContactsView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
];

export { routes };
