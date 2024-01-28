<script setup lang="ts">
// import AppContentPane from "@/app/components/AppContentPane.vue";
import AppNavigationDrawer from "@/app/components/drawers/TouchSlideoutDrawer.vue";
import AppSidebar from "@/app/components/navbars/AppNavbar.vue";
import AppHeader from "@/app/components/headers/AppHeader.vue";
import AppFooter from "@/app/components/footers/AppFooter.vue";
import AppMobileMenu from "@/app/components/AppMobileMenu.vue";
import AppLoaderBar from "@/app/components/ui/AppLoaderBar.vue";
import { useAppConfig } from "@/app/composables/useAppConfig";

const { isDrawerOpen } = useAppConfig();
</script>

<template>
  <div class="app">
    <AppHeader />
    <div class="main-pane">
      <AppNavigationDrawer v-model="isDrawerOpen">
        <AppSidebar />
      </AppNavigationDrawer>

      <div class="main-wrapper">
        <AppLoaderBar />
        <main class="main-content">
          <router-view />
        </main>
        <!-- <AppContentPane /> -->
      </div>
    </div>
    <AppFooter />
    <AppMobileMenu />
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-height: 100svh;
  .main-pane {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    z-index: 2;
    .main-wrapper {
      width: 100%;
      .main-content {
        padding: 1em 2em;
        width: 100%;
      }
    }
  }
}
</style>
