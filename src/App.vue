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
    const appStore = useAppStore();
    const { nightMode } = appStore;

    return {
      nightMode,
    };
  },
});
</script>

<style scoped lang="scss">
.night-mode {
  background-color: $dark-page;
  color: $info;

  a {
    color: $info;
  }
}
</style>
