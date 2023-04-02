<template>
  <div id="app" :class="{ 'night-mode': nightMode }">
    <router-view v-slot="{ Component }">
      <app-layout v-bind="$route.meta.layout">
        <component :is="Component" />
      </app-layout>
    </router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useAppStore } from './stores/useAppStore';
import AppLayout from './layouts/AppLayout.vue';

export default defineComponent({
  name: 'App',
  components: {
    AppLayout,
  },
  setup() {
    const appStore = useAppStore();

    // Destructure the required properties and actions from the store
    const { isLoggedIn, nightMode, toggleNightMode } = appStore;

    return {
      isLoggedIn,
      nightMode,
      toggleNightMode,
    };
  },
});
</script>

<style scoped lang="scss">
/* Add your base SCSS styling here */

.night-mode {
  background-color: $dark-page;
  color: $info;

  a {
    color: $info;
  }
}
</style>
