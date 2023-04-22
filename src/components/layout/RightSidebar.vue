<template>
  <div>
    <q-drawer
      side="right"
      bordered
      v-model="drawerOpen"
      :style="{ '--sidebar-bg-color': randomBackgroundColor }"
      :breakpoint="Number.MAX_VALUE"
    >
      <soap-bubbles />
      <q-separator />
    </q-drawer>
    <q-btn
      :icon="drawerOpen ? 'menu_open' : 'menu'"
      @click="toggleDrawer"
      class="drawer-toggle-btn"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import SoapBubbles from '../gamescreens/SoapBubbles.vue';

export default defineComponent({
  components: {
    SoapBubbles,
  },
  setup() {
    const drawerOpen = ref(true);

    const toggleDrawer = () => {
      drawerOpen.value = !drawerOpen.value;
    };

    const randomBackgroundColor = computed(() => {
      const randomColor = () => Math.floor(Math.random() * Math.floor(256));
      return `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    });

    return {
      drawerOpen,
      toggleDrawer,
      randomBackgroundColor,
    };
  },
});
</script>

<style lang="scss" scoped>
.q-drawer {
  background-color: var(--sidebar-bg-color);
}
.drawer-toggle-btn {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 1000;
  background-color: #5c6bc0;
  color: #ffffff;
}
</style>
