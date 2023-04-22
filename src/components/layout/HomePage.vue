<template>
  <q-layout view="hHh lpR fFf" class="main-layout">
    <q-header elevated class="header">
      <top-header />
    </q-header>
    <left-drawer class="left-drawer" />
    <q-page-container class="page-container">
      <q-page class="main-content q-pt-xl">
        <main-screen />
      </q-page>
    </q-page-container>
    <right-sidebar />
    <q-footer elevated class="footer">
      <bottom-footer />
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import TopHeader from './NewHeader.vue';
import LeftDrawer from './MagicLeftDrawer.vue';
import RightSidebar from './RightSidebar2.vue';
import BottomFooter from './BottomFooter.vue';
import MainScreen from './MainScreen.vue';

const getRandomNumber = () => Math.floor(Math.random() * 256);

const generateRandomColor = () =>
  `rgba(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()}, 0.7)`;

const generateRandomGradient = () => {
  const color1 = generateRandomColor();
  const color2 = generateRandomColor();
  return `linear-gradient(to bottom right, ${color1}, ${color2})`;
};

export default defineComponent({
  components: {
    TopHeader,
    LeftDrawer,
    RightSidebar,
    BottomFooter,
    MainScreen,
  },
  setup() {
    const topHeaderBg = ref(generateRandomGradient());
    const leftSidebarBg = ref(generateRandomGradient());
    const mainScreenBg = ref(generateRandomGradient());
    const rightSidebarBg = ref(generateRandomGradient());
    const bottomFooterBg = ref(generateRandomGradient());

    return {
      topHeader: { isActive: true, background: topHeaderBg },
      leftSidebar: { isActive: true, background: leftSidebarBg },
      rightSidebar: { isActive: true, background: rightSidebarBg },
      bottomFooter: { isActive: true, background: bottomFooterBg },
      mainScreen: { background: mainScreenBg },
    };
  },
});
</script>

<style lang="scss">
.main-layout {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.header {
  height: 18vh;
}

.footer {
  height: 10vh;
}

.page-container {
  height: 80vh;
}

.left-drawer {
  position: absolute;
  top: 20vh;
  height: 70vh;
}

.right-sidebar {
  height: 100%;
}
</style>
