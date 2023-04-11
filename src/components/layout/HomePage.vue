<template>
  <q-layout view="hHh lpR fFf">
    <q-header>
      <q-toolbar>
        <q-btn flat round dense icon="menu" @click="toggleLeftDrawer" />
        <title-bar />
        <q-btn flat round dense icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" show-if-above>
      <navigation-menu />
    </q-drawer>

    <q-page-container>
      <q-page class="flex flex-center">
        <!-- Add content that should appear in the center flex screen here -->
      </q-page>
    </q-page-container>

    <q-drawer v-model="rightDrawerOpen" side="right" show-if-above>
      <butterfly-mascot />
    </q-drawer>

    <q-footer>
      <q-toolbar>
        <q-toolbar-title>
          &copy; {{ new Date().getFullYear() }} Your Company
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import TitleBar from '../layout/TitleBar.vue';
import NavigationMenu from '../layout/NavigationMenu.vue';
import ButterflyMascot from '../screenfx/ButterflyMascot.vue';

export default defineComponent({
  components: { TitleBar, NavigationMenu, ButterflyMascot },
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
.q-drawer {
  // Butterfly wing shape for the QDrawers
  clip-path: polygon(0 0, 100% 0, 80% 50%, 100% 100%, 0 100%);
}

.q-drawer-left {
  // Left wing color gradient
  background-image: linear-gradient(45deg, #6b5b95, #d39bcb);
}

.q-drawer-right {
  // Right wing color gradient
  background-image: linear-gradient(135deg, #6b5b95, #d39bcb);
}
</style>
