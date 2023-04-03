<template>
  <q-layout view="lHh Lpr lFf">
    <AppHeader v-if="route.meta.layout.showHeader" />

    <AppSidebar
      v-if="route.meta.layout.showSidebar"
      v-model="componentVisibility.leftSidebar"
      show-if-above
      side="left"
    />

    <AppCenter />

    <AppSidebar
      v-if="route.meta.layout.showSidebar"
      v-model="componentVisibility.rightSidebar"
      show-if-above
      side="right"
    />

    <AppFooter v-if="route.meta.layout.showFooter" />
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

    return {
      componentVisibility,
      route,
    };
  },
});
</script>
