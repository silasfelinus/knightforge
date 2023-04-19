<template>
  <q-layout view="hHh lpR fFf">
    <ButterflyHeader />

    <q-page-container class="center-panel no-padding">
      <div class="center-image-container">
        <SplashImage class="center-image" />
      </div>
      <GameScreen />
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
      <LayerMenu />
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
import ChatInterface from '../gamescreens/ChatInterface.vue';
import SplashImage from '../WIP/SplashViewer.vue';
import LayerMenu from './LayerMenu.vue';
import GameScreen from './GameScreen.vue';

export default defineComponent({
  components: {
    ButterflyHeader,
    ButterflyFooter,
    ChatInterface,
    SplashImage,
    ButterflyMascot,
    LayerMenu,
    GameScreen,
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
