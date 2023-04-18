<template>
  <q-layout view="hHh lpR fFf">
    <ButterflyHeader />

    <q-page-container class="center-panel no-padding">
      <div class="center-image-container">
        <SplashImage class="center-image" />
      </div>
      <gameScreen />
    </q-page-container>

    <ButterflyFooter
      :toggleLeftDrawer="toggleLeftDrawer"
      :toggleRightDrawer="toggleRightDrawer"
    />

    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      show-if-above
      class="butterfly__sidebar--left"
    >
      <div class="butterfly__sidebar--left-gradient"></div>
      <layerMenu />
    </q-drawer>

    <q-drawer
      v-model="rightDrawerOpen"
      side="right"
      show-if-above
      class="butterfly__sidebar--right"
    >
      <ButterflyMascot ref="butterflyMascot" />
      <ChatInterface />
    </q-drawer>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ButterflyHeader from './ButterflyHeader.vue';
import ButterflyFooter from './ButterflyFooter.vue';
import ButterflyMascot from './ButterflyMascot.vue';
import ChatInterface from './ChatInterface.vue';
import SplashImage from '../gamescreens/SplashViewer.vue';
import layerMenu from './LayerMenu.vue'; // Import the layerMenu component
import gameScreen from './GameScreen.vue'; // Import the gameScreen component

export default defineComponent({
  components: {
    ButterflyHeader,
    ButterflyFooter,
    ChatInterface,
    SplashImage,
    ButterflyMascot,
    layerMenu, // Add the layerMenu component
    gameScreen, // Add the gameScreen component
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
