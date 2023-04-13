<template>
  <q-layout view="hHh lpR fFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          round
          dense
          icon="arrow_forward_ios"
          @click="toggleLeftDrawer"
        />
        <q-space />
        <TitleBar />
        <SplashMessage />
        <q-space />
        <q-btn
          flat
          round
          dense
          icon="arrow_forward_ios"
          @click="toggleRightDrawer"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      show-if-above
      class="butterfly__sidebar--left"
    >
      <NavigationMenu />
    </q-drawer>
    <q-drawer
      v-model="rightDrawerOpen"
      side="right"
      show-if-above
      class="butterfly__sidebar--right"
    >
      <NavigationRemote />
    </q-drawer>

    <q-page-container>
      <q-page class="flex flex-center game-screen-container">
        <MagicScreen v-for="gameScreen in gameScreens" :key="gameScreen.id" />
      </q-page>
    </q-page-container>

    <q-footer>
      <q-toolbar>
        <q-toolbar-title>
          &copy; {{ new Date().getFullYear() }} AI Wonderforge
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import NavigationMenu from './NavigationMenu.vue';
import NavigationRemote from './NavigationRemote.vue';
import MagicScreen from '@/components/layout/MagicScreen.vue';
import TitleBar from '@/components/layout/TitleBar.vue';
import SplashMessage from '@/components/layout/SplashMessage.vue';
import { useAppStore } from '@/stores/useAppStore';

export default defineComponent({
  components: {
    NavigationMenu,
    NavigationRemote,
    MagicScreen,
    TitleBar,
    SplashMessage,
  },
  setup() {
    const appStore = useAppStore();
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);

    function toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    }

    function toggleRightDrawer() {
      rightDrawerOpen.value = !rightDrawerOpen.value;
    }

    return {
      gameScreens: appStore.gameScreens,
      leftDrawerOpen,
      rightDrawerOpen,
      toggleLeftDrawer,
      toggleRightDrawer,
    };
  },
});
</script>

<style lang="scss"></style>
