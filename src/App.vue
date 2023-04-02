<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useAppStore } from './stores/useAppStore';

export default defineComponent({
  name: 'App',
  setup() {
    const appStore = useAppStore();

    // Here, you can access the state and actions from your appStore
    // and perform any necessary operations before rendering the pages

    return {};
  },
});
</script>
<style lang="scss">
/* Add your base SCSS styling here */

.night-mode {
  background-color: $dark-page;
  color: $info;

  a {
    color: $info;
  }

  // Add any other Night Mode styles as needed
}

/* GlobalNotification component styles */
.global-notification {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

.notification {
  background-color: $warning;
  color: $dark;
  padding: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
