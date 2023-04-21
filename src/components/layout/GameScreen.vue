<template>
  <div id="game-screen">
    <router-view
      v-for="route in activeScreenRoutes"
      :key="route.name"
      :name="route.name && typeof route.name === 'string' ? route.name : ''"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { ScreenRoutes } from '@/router/ScreenRoutes';

interface ScreenRouteMeta {
  order: number;
  isActive: boolean;
}

function isScreenRouteMeta(meta: unknown): meta is ScreenRouteMeta {
  return (
    !!meta &&
    typeof (meta as ScreenRouteMeta).order === 'number' &&
    typeof (meta as ScreenRouteMeta).isActive === 'boolean'
  );
}

function getActiveScreenRoutes() {
  return ScreenRoutes.filter(
    (route) => isScreenRouteMeta(route.meta) && route.meta.isActive
  ).sort(
    (a, b) =>
      (isScreenRouteMeta(a.meta) ? a.meta.order : 0) -
      (isScreenRouteMeta(b.meta) ? b.meta.order : 0)
  );
}

export default defineComponent({
  name: 'GameScreen',
  setup() {
    const activeScreenRoutes = computed(() => getActiveScreenRoutes());
    return { activeScreenRoutes };
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
