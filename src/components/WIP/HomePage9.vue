<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <top-header v-if="topHeader.isActive" />
    </q-header>
    <left-sidebar v-show="leftSidebar.isActive" />
    <q-page-container>
      <q-page class="main-content q-pt-xl">
        <main-screen />
      </q-page>
    </q-page-container>
    <right-sidebar v-show="rightSidebar.isActive" />
    <q-footer elevated>
      <bottom-footer v-if="bottomFooter.isActive" />
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import TopHeader from '../layout/NewHeader.vue';
import LeftSidebar from '../layout/LeftSidebar.vue';
import RightSidebar from '../layout/RightSidebar.vue';
import BottomFooter from '../layout/BottomFooter.vue';
import MainScreen from '../layout/MainScreen.vue';

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
    LeftSidebar,
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
