<template>
  <q-layout view="hHh lpR fFf">
    <q-header>
      <q-toolbar-title>
        <q-btn flat round dense icon="menu" @click="toggleLeftDrawer" />
      </q-toolbar-title>
      <q-space />
      <h1>WonderFORGE (Opening Soon)</h1>
      <q-space />
      <q-toolbar-title>
        <q-btn
          flat
          round
          dense
          icon="arrow_forward_ios"
          @click="toggleRightDrawer"
        />
      </q-toolbar-title>
    </q-header>
    <q-dialog v-model="leftDrawerOpen" class="center-dialog">
      <NavigationMenu />
    </q-dialog>
    <q-page-container>
      <q-page class="flex flex-center game-screen-container">
        <GameScreen />
      </q-page>
    </q-page-container>
    <q-drawer
      v-model="rightDrawerOpen"
      side="right"
      show-if-above
      class="right-drawer"
    >
      <butterfly-mascot />
    </q-drawer>
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
import ButterflyMascot from '../screenfx/ButterflyMascot.vue';
import GameScreen from '@/components/gamescreen/GameScreen.vue';

export default defineComponent({
  components: { NavigationMenu, ButterflyMascot, GameScreen },
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

<style lang="scss">
.left-drawer {
  // Butterfly wing shape for the left QDrawer
  clip-path: polygon(0 0, 100% 0, 80% 50%, 100% 100%, 0 100%);

  // Left wing color gradient
  background-image: linear-gradient(45deg, #6b5b95, rgba(107, 91, 149, 0));
}

.right-drawer {
  // Butterfly wing shape for the right QDrawer
  clip-path: polygon(100% 0, 100% 100%, 0 100%, 20% 50%, 0 0);

  // Right wing color gradient
  background-image: linear-gradient(225deg, rgba(107, 91, 149, 0), #6b5b95);
}

.center-dialog {
  max-width: 90%;
  max-height: 90%;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.game-screen-container {
  width: 100%;
  height: 100%;
}
</style>
