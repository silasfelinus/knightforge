<template>
  <q-header class="app-header">
    <q-toolbar>
      <q-btn icon="menu" flat @click="toggleSidebar('leftSidebar')" />
      <h1 class="title">{{ appStore.projectTitle }}</h1>
      <q-btn icon="nightlight" flat @click="toggleNightMode" />
      <q-btn label="Login" flat to="/login" />
      <q-btn icon="more_vert" flat @click="toggleSidebar('rightSidebar')" />
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useAppStore } from '../stores/useAppStore';

export default defineComponent({
  name: 'AppHeader',
  setup() {
    const appStore = useAppStore();

    const toggleSidebar = (name: string) => {
      appStore.componentVisibility[name] = !appStore.componentVisibility[name];
    };

    const toggleNightMode = () => {
      appStore.toggleNightMode();
    };

    return {
      appStore,
      toggleSidebar,
      toggleNightMode
    };
  }
});
</script>

<style scoped lang="scss">
.app-header {
  background-color: #f8f8f8;
  border-bottom: 1px solid #e0e0e0;
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  text-align: center;
  flex: 1;
}
</style>
