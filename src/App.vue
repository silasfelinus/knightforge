<template>
  <div id="app" :class="{ 'night-mode': nightMode }">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useAppStore } from './stores/useAppStore';

export default defineComponent({
  name: 'App',
  setup() {
    // Access the app store
    const appStore = useAppStore();

    // Destructure the nightMode property from the app store
    const { nightMode } = appStore;

    return {
      nightMode,
    };
  },
});
</script>

<style scoped lang="scss">
.night-mode {
  // Apply styles for night mode
  background-color: $dark-page;
  color: $info;

  // Style anchor tags in night mode
  a {
    color: $info;
  }
}
</style>
