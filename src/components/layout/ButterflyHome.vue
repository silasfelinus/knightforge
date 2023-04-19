<template>
  <q-layout>
    <div class="home-page">
      <butterfly-header />
      <q-drawer
        v-model="leftDrawerOpen"
        :width="leftDrawerWidth"
        :breakpoint="leftDrawerBreakpoint"
        :content-class="['drawer-content', 'left-drawer-content']"
      >
        <butterfly-left-drawer />
      </q-drawer>
      <q-drawer
        v-model="rightDrawerOpen"
        :width="rightDrawerWidth"
        :breakpoint="rightDrawerBreakpoint"
        :content-class="['drawer-content', 'right-drawer-content']"
      >
        <butterfly-right-drawer />
      </q-drawer>
      <butterfly-center />
      <ButterflyFooter
        :toggleLeftDrawer="toggleLeftDrawer"
        :toggleRightDrawer="toggleRightDrawer"
      /></div
  ></q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import ButterflyHeader from './ButterflyHeader.vue';
import ButterflyLeftDrawer from './ButterflyLeftDrawer.vue';
import ButterflyRightDrawer from './ButterflyRightDrawer.vue';
import ButterflyCenter from './ButterflyCenter.vue';
import ButterflyFooter from './ButterflyFooter.vue';

export default defineComponent({
  name: 'HomePage',

  components: {
    ButterflyHeader,
    ButterflyLeftDrawer,
    ButterflyRightDrawer,
    ButterflyCenter,
    ButterflyFooter,
  },
  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);
    const leftDrawerWidth = 300;
    const rightDrawerWidth = 300;
    const leftDrawerBreakpoint = 1024;
    const rightDrawerBreakpoint = 1024;

    function toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    }

    function toggleRightDrawer() {
      rightDrawerOpen.value = !rightDrawerOpen.value;
    }

    return {
      leftDrawerOpen,
      rightDrawerOpen,
      leftDrawerWidth,
      rightDrawerWidth,
      leftDrawerBreakpoint,
      rightDrawerBreakpoint,
      toggleLeftDrawer,
      toggleRightDrawer,
    };
  },
});
</script>

<style lang="scss" scoped>
.home-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
}

butterfly-header {
  height: 9vh;
}

butterfly-center {
  flex-grow: 1;
  display: flex;
  overflow: hidden;
}

ButterflyFooter {
  height: 4vh;
}

.drawer-content {
  background-color: #fff;
}

.left-drawer-content {
  background: linear-gradient(to bottom, #c0c0c0, #ffffff);
}

.right-drawer-content {
  background: linear-gradient(to bottom, #ffffff, #c0c0c0);
}
</style>
