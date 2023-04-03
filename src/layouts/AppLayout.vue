<template>
  <q-layout view="lHh Lpr lFf">
    <AppHeader v-if="layoutConfig.showHeader" />

    <AppSidebar
      v-if="layoutConfig.showSidebar"
      v-model="componentVisibility.leftSidebar"
      show-if-above
      side="left"
    />

    <AppCenter />

    <AppSidebar
      v-if="layoutConfig.showSidebar"
      v-model="componentVisibility.rightSidebar"
      show-if-above
      side="right"
    />

    <AppFooter v-if="layoutConfig.showFooter" />
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import AppHeader from './AppHeader.vue';
import AppSidebar from './AppSidebar.vue';
import AppFooter from './AppFooter.vue';
import AppCenter from './AppCenter.vue';
import { useAppStore } from '../stores/useAppStore';

type LayoutConfig = {
  showHeader: boolean;
  showFooter: boolean;
  showSidebar: boolean;
};

export default defineComponent({
  name: 'AppLayout',
  components: {
    AppHeader,
    AppSidebar,
    AppFooter,
    AppCenter,
  },
  setup() {
    const route = useRoute();
    const appStore = useAppStore();
    const componentVisibility = appStore.componentVisibility;
    const layoutConfig = (route.meta.layout || {}) as LayoutConfig;

    return {
      componentVisibility,
      route,
      layoutConfig,
    };
  },
});
</script>
