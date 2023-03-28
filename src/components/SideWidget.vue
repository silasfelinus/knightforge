<template>
  <q-drawer
    class="side-widget"
    :class="{ 'side-widget--closed': !drawerOpen }"
    show-if-above
    width="240"
    :value="drawerOpen"
    @input="updateDrawerOpen"
  >
    <nav class="side-nav">
      <ul class="side-nav-list">
        <li v-for="(item, index) in menuItems" :key="index">
          <a class="side-nav-link" href="#">
            <q-icon name="{{ item.icon }}" />
            <span class="side-nav-label">{{ item.label }}</span>
          </a>
        </li>
      </ul>
    </nav>
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
  position: fixed;
  top: 64px;
  left: 0;
  width: 240px;
  height: 100%;
  background-color: $primary;
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  z-index: 5;
}

.side-widget--closed {
  transform: translateX(-100%);
}

.side-nav {
  display: flex;
  flex-direction: column;
  padding: 24px;
  height: 100%;
}

.side-nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.side-nav-link {
  display: flex;
  align-items: center;
  gap: 16px;
  color: $secondary;
  text-decoration: none;
  padding: 8px 0;
  transition: background-color 0.2s ease;
}

.side-nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.side-nav-link.active {
  background-color: rgba(255, 255, 255, 0.2);
}

.side-nav-label {
  font-size: 16px;
}
</style>
