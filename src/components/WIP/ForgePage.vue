<template>
  <q-layout view="hHh lpR fFf">
    <q-header>
      <q-toolbar>
        <q-btn flat round dense icon="menu" @click="toggleLeftTopDrawer" />
        <q-btn flat round dense icon="menu" @click="toggleLeftBottomDrawer" />
        <title-bar />
        <q-btn flat round dense icon="menu" @click="toggleRightTopDrawer" />
        <q-btn flat round dense icon="menu" @click="toggleRightBottomDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftTopDrawerOpen" side="left" class="top-wing">
      <navigation-menu />
    </q-drawer>

    <q-drawer v-model="leftBottomDrawerOpen" side="left" class="bottom-wing">
      <navigation-menu />
    </q-drawer>

    <q-page-container>
      <q-page class="flex flex-center"> </q-page>
    </q-page-container>

    <q-drawer v-model="rightTopDrawerOpen" side="right" class="top-wing">
      <butterfly-mascot />
    </q-drawer>

    <q-drawer v-model="rightBottomDrawerOpen" side="right" class="bottom-wing">
      <butterfly-mascot />
    </q-drawer>

    <q-btn
      class="absolute-right"
      flat
      round
      dense
      icon="menu"
      @click="toggleAllDrawers"
    />

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
import ButterflyMascot from '../layout/ButterflyMascot.vue';

export default defineComponent({
  components: {
    TitleBar,
    NavigationMenu,
    ButterflyMascot,
  },
  setup() {
    const leftTopDrawerOpen = ref(false);
    const leftBottomDrawerOpen = ref(false);
    const rightTopDrawerOpen = ref(false);
    const rightBottomDrawerOpen = ref(false);

    function toggleLeftTopDrawer() {
      leftTopDrawerOpen.value = !leftTopDrawerOpen.value;
    }

    function toggleLeftBottomDrawer() {
      leftBottomDrawerOpen.value = !leftBottomDrawerOpen.value;
    }

    function toggleRightTopDrawer() {
      rightTopDrawerOpen.value = !rightTopDrawerOpen.value;
    }

    function toggleRightBottomDrawer() {
      rightBottomDrawerOpen.value = !rightBottomDrawerOpen.value;
    }

    function toggleAllDrawers() {
      leftTopDrawerOpen.value = !leftTopDrawerOpen.value;
      leftBottomDrawerOpen.value = !leftBottomDrawerOpen.value;
      rightTopDrawerOpen.value = !rightTopDrawerOpen.value;
      rightBottomDrawerOpen.value = !rightBottomDrawerOpen.value;
    }

    return {
      leftTopDrawerOpen,
      leftBottomDrawerOpen,
      rightTopDrawerOpen,
      rightBottomDrawerOpen,
      toggleLeftTopDrawer,
      toggleLeftBottomDrawer,
      toggleRightTopDrawer,
      toggleRightBottomDrawer,
      toggleAllDrawers,
    };
  },
});
</script>

<style lang="scss">
.q-drawer {
  // Butterfly wing shape for the QDrawers
  clip-path: polygon(0 0, 100% 0, 80% 50%, 100% 100%, 0 100%);
}

.top-wing {
  // Top wing color gradient
  background-image: linear-gradient(45deg, #6b5b95, #d39bcb);
}

.bottom-wing {
  // Bottom wing color gradient
  background-image: linear-gradient(135deg, #6b5b95, #d39bcb);
}

.absolute-right {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
