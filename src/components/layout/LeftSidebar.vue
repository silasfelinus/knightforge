<template>
  <div>
    <q-drawer
      side="left"
      bordered
      show-if-above
      v-model="drawerOpen"
      :style="{ '--sidebar-bg-color': backgroundColor }"
    >
      <musical-component />
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
import { defineComponent, ref } from 'vue';
import MusicalComponent from '../butterfly/MusicalComponent.vue';

export default defineComponent({
  props: {
    backgroundColor: {
      type: String,
      default: '#b8e0ff',
    },
  },
  components: {
    MusicalComponent,
  },
  setup() {
    const drawerOpen = ref(true);

    const toggleDrawer = () => {
      drawerOpen.value = !drawerOpen.value;
    };

    return {
      drawerOpen,
      toggleDrawer,
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
  z-index: 1000; // Ensure that the button is on top of other elements
  background-color: #5c6bc0; // Add a background color here
  color: #ffffff; // You can also add a text color if you want the icon to be more visible
}
</style>
