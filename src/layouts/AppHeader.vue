<template>
  <q-header>
    <TitleBar @toggle-left-sidebar="toggleLeftSidebar" />
  </q-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TitleBar from '../pages/TitleBar.vue';
import { useAppStore } from '../stores/useAppStore';

export default defineComponent({
  name: 'AppHeader',
  components: {
    TitleBar,
  },
  setup() {
    const appStore = useAppStore();
    const toggleLeftSidebar = () => {
      appStore.componentVisibility.leftSidebar =
        !appStore.componentVisibility.leftSidebar;
    };

    return {
      toggleLeftSidebar,
    };
  },
});
</script>
