<template>
  <q-layout view="lHh Lpr lFf">
    <AppHeader v-if="componentVisibility.headerBar" />

    <AppSidebar
      v-model="componentVisibility.leftSidebar"
      show-if-above
      side="left"
    />

    <AppCenter />

    <AppSidebar
      v-model="componentVisibility.rightSidebar"
      show-if-above
      side="right"
    />

    <AppFooter v-if="componentVisibility.footerBar" />
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
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
    const appStore = useAppStore();
    const componentVisibility = appStore.componentVisibility;

    return {
      componentVisibility,
    };
  },
});
</script>
