<template>
  <div>
    <q-page-sticky position="top-right" :offset="[48, 16]">
      <q-drawer
        side="right"
        bordered
        v-model="drawerOpen"
        :style="{ '--sidebar-bg-color': randomBackgroundColor }"
        :breakpoint="Number.MAX_VALUE"
        :width="drawerWidth"
      >
        <soap-bubbles v-if="drawerOpen" />
        <q-separator v-if="drawerOpen" />
      </q-drawer>
      <q-btn
        :icon="drawerOpen ? 'menu_open' : 'menu'"
        @click="toggleDrawer"
        class="drawer-toggle-btn"
      />
    </q-page-sticky>
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
      return `rgba(${randomColor()}, ${randomColor()}, ${randomColor()}, 0.7)`;
    });

    const drawerWidth = computed(() => (drawerOpen.value ? 30 : 0));

    return {
      drawerOpen,
      toggleDrawer,
      randomBackgroundColor,
      drawerWidth,
    };
  },
});
</script>

<style lang="scss" scoped>
.q-drawer {
  background-color: var(--sidebar-bg-color);
  transition: width 0.3s ease;
}
.drawer-toggle-btn {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1000;
  background-color: #5c6bc0;
  color: #ffffff;
}
</style>
