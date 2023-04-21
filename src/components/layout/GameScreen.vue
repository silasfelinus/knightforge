<template>
  <div id="game-screen">
    <router-view
      v-for="route in activeGameScreenRoutes"
      :key="route.name"
      :name="route.name && typeof route.name === 'string' ? route.name : ''"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { gameScreenRoutes } from '@/router/ScreenRoutes.js';

interface GameScreenRouteMeta {
  order: number;
  isActive: boolean;
}

function isGameScreenRouteMeta(meta: unknown): meta is GameScreenRouteMeta {
  return (
    !!meta &&
    typeof (meta as GameScreenRouteMeta).order === 'number' &&
    typeof (meta as GameScreenRouteMeta).isActive === 'boolean'
  );
}

function getActiveGameScreenRoutes() {
  return gameScreenRoutes
    .filter((route) => isGameScreenRouteMeta(route.meta) && route.meta.isActive)
    .sort(
      (a, b) =>
        (isGameScreenRouteMeta(a.meta) ? a.meta.order : 0) -
        (isGameScreenRouteMeta(b.meta) ? b.meta.order : 0)
    );
}

export default defineComponent({
  name: 'GameScreen',
  setup() {
    const activeGameScreenRoutes = computed(() => getActiveGameScreenRoutes());
    return { activeGameScreenRoutes };
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
