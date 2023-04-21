<!-- LayerManager.vue -->
<template>
  <div class="toggle-container">
    <div v-for="route in gameScreenRoutes" :key="route.name">
      <label>
        <input
          type="checkbox"
          :checked="isGameScreenRouteMeta(route.meta) && route.meta.isActive"
          @change="toggleRoute(route)"
        />
        {{ route.name }}
      </label>
    </div>
  </div>
  <div class="layer-container">
    <component
      v-for="route in activeGameScreenRoutes"
      :key="route.name"
      :is="route.component"
    ></component>
  </div>
</template>

<script lang="ts">
import { RouteRecordRaw } from 'vue-router';
import {
  gameScreenRoutes,
  isGameScreenRouteMeta,
  activeGameScreenRoutes,
} from '@/router/ScreenRoutes.js';

function toggleRoute(route: RouteRecordRaw) {
  if (isGameScreenRouteMeta(route.meta)) {
    route.meta.isActive = !route.meta.isActive;
  }
}

export default {
  setup() {
    return {
      gameScreenRoutes,
      activeGameScreenRoutes,
      isGameScreenRouteMeta,
      toggleRoute,
    };
  },
};
</script>

<style scoped>
.layer-container {
  position: relative;
}

.layer-container > * {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
