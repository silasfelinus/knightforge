<template>
  <q-drawer
    class="side-widget"
    :class="{ closed: !drawerOpen }"
    show-if-above
    width="250"
    :value="drawerOpen"
    @input="updateDrawerOpen"
  >
    <q-list>
      <q-item v-for="(item, index) in menuItems" :key="index" clickable>
        <q-item-section>
          <q-item-label>{{ item.label }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon :name="item.icon" />
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'SideWidget',
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },
  setup(props, { emit }) {
    const drawerOpen = ref(props.value);
    const menuItems = [
      { label: 'Home', icon: 'home' },
      { label: 'Settings', icon: 'settings' },
      { label: 'Help', icon: 'help' },
    ];

    const updateDrawerOpen = (val: boolean) => {
      drawerOpen.value = val;
      emit('input', val);
    };

    return {
      drawerOpen,
      menuItems,
      updateDrawerOpen,
    };
  },
});
</script>

<style lang="scss" scoped>
.side-widget {
  height: 100%;
  width: 240px;
  position: fixed;
  left: 0;
  top: 64px; // Adjust this value to match the header height
  background-color: $color-primary;
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  z-index: 10;

  &.closed {
    transform: translateX(-100%);
  }
}
</style>
