// router/index { path: '/example', name: 'ExampleHome', component: ExampleHome,
meta: { isActive: true, headerContent: TitleBar, leftSidebarContent:
NavigationMenu, rightSidebarContent: RemoteControl, footerContent:
SplashMessage, mainScreenContent: MagicFrame, }, }, // ExampleHome
<template>
  <q-layout view="hHh LpR fFf">
    <q-header v-if="route.meta.headerContent" :is="route.meta.headerContent">
    </q-header>

    <q-drawer
      v-if="route.meta.leftSidebarContent.length > 0"
      side="left"
      overlay
      elevated
    >
      <component
        v-for="(component, idx) in route.meta.leftSidebarContent"
        :key="idx"
        :is="component"
      />
    </q-drawer>

    <q-drawer
      v-if="route.meta.rightSidebarContent.length > 0"
      side="right"
      overlay
      elevated
    >
      <component
        v-for="(component, idx) in route.meta.rightSidebarContent"
        :key="idx"
        :is="component"
      />
    </q-drawer>

    <q-page-container>
      <component
        v-if="route.meta.mainScreenContent"
        :is="route.meta.mainScreenContent"
      />
    </q-page-container>

    <q-footer v-if="route.meta.footerContent" :is="route.meta.footerContent">
    </q-footer>
  </q-layout>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
  setup() {
    const route = useRoute();

    return {
      route,
    };
  },
};
</script>

<style scoped></style>
