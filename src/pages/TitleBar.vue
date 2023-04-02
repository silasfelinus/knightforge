<template>
  <q-header class="title-bar">
    <q-toolbar>
      <q-btn flat dense round icon="menu" @click="toggleSidebar" />
      <q-toolbar-title class="text-h6">{{ title }}</q-toolbar-title>
      <div class="spacer"></div>
      <!-- Additional header content goes here -->
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useAppStore } from '../stores/useAppStore';

export default defineComponent({
  name: 'TitleBar',
  props: {
    title: {
      type: String,
      default: 'WonderForge',
    },
  },
  setup() {
    const appStore = useAppStore();
    const toggleSidebar = () => appStore.toggleSidebar();

    return {
      toggleSidebar,
    };
  },
});
</script>

<style scoped lang="scss">
.title-bar {
  background-color: $primary;
  color: $secondary;
}

.spacer {
  flex: 1;
}
</style>
