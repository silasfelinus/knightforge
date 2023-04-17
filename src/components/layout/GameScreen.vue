<template>
  <div class="game-screen">
    <keep-alive>
      <component
        v-for="route in activeGameScreenRoutes"
        :key="route.name"
        :is="route.component"
      ></component>
    </keep-alive>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { RouteRecordRaw } from 'vue-router';
import { gameScreenRoutes } from '@/router';

export default defineComponent({
  name: 'GameScreen',
  setup() {
    const activeGameScreenRoutes = computed(() =>
      gameScreenRoutes
        .filter((route: RouteRecordRaw) => route.meta?.isActive)
        .sort(
          (a: RouteRecordRaw, b: RouteRecordRaw) =>
            ((a.meta?.order ?? 0) as number) - ((b.meta?.order ?? 0) as number)
        )
    );

    return {
      activeGameScreenRoutes,
    };
  },
});
</script>

<style scoped>
.game-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border: 2px solid red;
  background-color: rgba(255, 255, 0, 0.3);
  padding: 16px;
}
</style>
