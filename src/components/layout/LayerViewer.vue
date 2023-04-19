<template>
  <div id="game-screen">
    <router-view
      v-for="route in activeRoutes"
      :key="route.name"
      :name="route.name && typeof route.name === 'string' ? route.name : ''"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { activeGameScreenRoutes } from '@/router';

export default defineComponent({
  name: 'GameScreen',
  setup() {
    return { activeRoutes: activeGameScreenRoutes };
  },
});
</script>

<style scoped>
#game-screen {
  position: relative;
  width: 100%;
  height: 100%;
}

#game-screen > * {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
