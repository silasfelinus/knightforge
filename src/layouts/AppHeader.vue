<template>
  <q-header class="title-bar">
    <q-toolbar>
      <q-btn flat dense round icon="menu" @click="toggleComponentVisibility('leftSidebar')" />
      <!-- Add more buttons to control other windows here -->
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
    const toggleComponentVisibility = (component: string) => appStore.toggleComponentVisibility(component);

    return {
      toggleComponentVisibility,
    };
  },
});
</script>


<style scoped>
.title-bar {
  background-color: var(--q-color-primary);
  color: var(--q-color-primary-contrast);
}

.spacer {
  flex-grow: 1;
}
</style>


<style scoped lang="scss">
.title-bar {
  background-color: $primary;
  color: $secondary;
}

.spacer {
  flex: 1;
}
</style>
