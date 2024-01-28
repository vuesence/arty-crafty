import type { RouteRecordRaw } from "vue-router";
import HomeView from "@/app/views/HomeView.vue";
import ProductCategoryView from "@/products/views/ProductCategoryView.vue";
import ProductView from "@/products/views/ProductView.vue";
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
    props: route => ({ productId: +(route.params.productId as string).split("-")[0] }),
    component: ProductView,
  },
  {
    path: "/category/:categoryId",
    name: "category",
    props: route => ({ categoryId: +(route.params.categoryId as string).split("-")[0] }),
    component: ProductCategoryView,
  },
  {
    path: "/favourites",
    name: "favourites",
    props: { categoryId: 0 },
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
