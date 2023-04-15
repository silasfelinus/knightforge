<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
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
      ><ButterflyMascot></ButterflyMascot>
      <MagicRemote />
    </q-drawer>

    <q-page-container>
      <MagicFrame>
        <router-view />
      </MagicFrame>
    </q-page-container>

    <q-footer elevated>
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
import TitleBar from '@/components/layout/TitleBar.vue';
import SplashMessage from '@/components/layout/SplashMessage.vue';
import ButterflyMascot from '@/components/layout/ButterflyMascot.vue';
import MagicFrame from '@/components/layout/MagicFrame.vue';
import MagicRemote from '@/components/gamescreens/MagicRemote.vue';

export default defineComponent({
  components: {
    NavigationMenu,
    TitleBar,
    SplashMessage,
    ButterflyMascot,
    MagicFrame,
    MagicRemote,
  },
  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);

    function toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    }

    function toggleRightDrawer() {
      rightDrawerOpen.value = !rightDrawerOpen.value;
    }

    return {
      leftDrawerOpen,
      rightDrawerOpen,
      toggleLeftDrawer,
      toggleRightDrawer,
    };
  },
});
</script>

<style lang="scss"></style>
