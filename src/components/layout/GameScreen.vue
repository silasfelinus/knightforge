<!-- GameScreen.vue -->
<template>
  <div id="game-screen">
    <router-view
      v-for="route in activeRoutes"
      :key="route.name"
      :name="route.name"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { gameScreenRoutes } from '@/router';
import { RouteRecordRaw } from 'vue-router';

interface GameScreenRouteMeta {
  order: number;
  isActive: boolean;
}

export default defineComponent({
  name: 'GameScreen',
  setup() {
    const activeRoutes = computed((): RouteRecordRaw[] => {
      return gameScreenRoutes
        .filter(
          (route: RouteRecordRaw) =>
            (route.meta as GameScreenRouteMeta).isActive
        )
        .sort(
          (a: RouteRecordRaw, b: RouteRecordRaw) =>
            (a.meta as GameScreenRouteMeta).order -
            (b.meta as GameScreenRouteMeta).order
        );
    });

    return { activeRoutes };
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
