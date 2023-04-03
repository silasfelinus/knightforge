<template>
  <q-header class="app-header">
    <q-toolbar>
      <q-btn icon="menu" flat @click="toggleLeftSidebar" />
      <TitleBar />
      <q-space />
      <q-btn icon="nightlight" flat @click="toggleNightMode" />
      <q-btn label="Login" flat to="/login" />
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TitleBar from '../views/TitleBar.vue';
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

    const toggleNightMode = () => {
      appStore.toggleNightMode();
    };

    return {
      toggleLeftSidebar,
      toggleNightMode,
    };
  },
});
</script>

<style scoped lang="scss">
.app-header {
  background-color: #f8f8f8;
  border-bottom: 1px solid #e0e0e0;
}
</style>
