<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container class="center-panel no-padding">
      <router-view name="gameScreen" />
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
      <router-view name="layerMenu" />
    </q-drawer>

    <q-drawer
      v-model="rightDrawerOpen"
      side="right"
      show-if-above
      class="butterfly__sidebar--right"
    >
      <ButterflyMascot ref="butterflyMascot" />
    </q-drawer>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ButterflyFooter from './ButterflyFooter.vue';
import ButterflyMascot from './ButterflyMascot.vue';

export default defineComponent({
  components: {
    ButterflyFooter,
    ButterflyMascot,
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

<style lang="scss">
.butterfly__sidebar--left {
  background-color: $accent;
  position: relative;
}
.q-drawer {
  background-color: $primary;
}
.butterfly__sidebar--left-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  clip-path: polygon(0 0, 100% 0, 80% 50%, 100% 100%, 0 100%);
  background-image: linear-gradient(45deg, $primary, transparent);
}
</style>
