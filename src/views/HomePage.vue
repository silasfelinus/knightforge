<template>
  <div>
    <h1>Home Page</h1>
    <button @click="toggleNightMode">Toggle Night Mode</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useAppStore } from '../stores/useAppStore';

export default defineComponent({
  name: 'HomePage',
  setup() {
    const appStore = useAppStore();

    const toggleNightMode = () => {
      appStore.nightMode = !appStore.nightMode;
    };

    return {
      toggleNightMode,
    };
  },
});
</script>
