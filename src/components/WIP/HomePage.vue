<template>
  <q-layout view="hHh lpR fFf">
    <ButterflyHeader />

    <q-page-container class="center-panel no-padding">
      <div class="flex-item splash-viewer">
        <div class="label">Splash Viewer</div>
        <SplashViewer />
      </div>
      <div class="flex-container">
        <div class="flex-item under-construction">
          <div class="label">Under Construction</div>
          <UnderConstruction />
        </div>
        <div class="flex-item splash-image">
          <div class="label">Splash Image</div>
          <SplashImage />
        </div>
        <div class="flex-item soap-bubbles">
          <div class="label">Soap Bubbles</div>
          <SoapBubbles />
        </div>
      </div>
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
import ButterflyMascot from '../layout/ButterflyMascot.vue';
import ChatInterface from '../gamescreens/ChatInterface.vue';
import SplashImage from './SplashViewer.vue';
import LayerMenu from '../layout/LayerMenu.vue';
import SplashViewer from './SplashViewer.vue';
import UnderConstruction from '../gamescreens/UnderConstruction.vue';
import SoapBubbles from '../gamescreens/SoapBubbles.vue';

export default defineComponent({
  components: {
    ButterflyHeader,
    ButterflyFooter,
    ChatInterface,
    SplashImage,
    ButterflyMascot,
    LayerMenu,
    SplashViewer,
    UnderConstruction,
    SoapBubbles,
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
.center-panel { position: relative; } .center-image-container { position:
absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; }
.center-image { object-fit: cover; width: 100%; height: 100%; } .flex-container
{ display: flex; justify-content: center; align-items: stretch; flex-wrap: wrap;
& > .flex-item { flex-basis: 33.33%; max-width: 33.33%; position: relative;
overflow: hidden; background-color: rgba(0, 0, 0, 0.1); // Adjust
background-color as needed } & > .flex-item > * { position: absolute; top: 0;
left: 0; width: 100%; height: 100%; } .label { position: absolute; top: 0; left:
0; padding: 4px; background-color: rgba(255, 255, 255, 0.7); z-index: 1; } }
.butterfly__sidebar--left, .butterfly__sidebar--right { background-color:
$primary; } .butterfly__sidebar--left-gradient { position: absolute;
