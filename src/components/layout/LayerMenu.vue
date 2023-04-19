<template>
  <div class="layer-panel">
    <div class="layer-menu">
      <q-btn
        v-for="route in routesWithActive"
        :key="route.path"
        class="layer-toggle"
        flat
        :label="getRouteName(route)"
        :title="getRouteName(route)"
        :color="route.meta.isActive ? 'primary' : 'grey'"
        @click="toggleLayer(route)"
      />
    </div>
    <div class="layer-display">
      <router-view></router-view>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';
import { useRouter } from 'vue-router';
import { gameScreenRoutes } from '@/router/gameScreenRoutes';
import { RouteRecordRaw } from 'vue-router';

export type RouteWithActive = RouteRecordRaw & {
  meta: { order: number; isActive: boolean };
};
function initializeRoutesWithActive(
  routes: RouteRecordRaw[]
): RouteWithActive[] {
  return routes.map((route) => ({
    ...route,
    meta: {
      ...route.meta,
      order: (route.meta?.order as number) || 0,
      isActive: false,
    },
  }));
}
export default defineComponent({
  name: 'LayerMenu',
  setup() {
    const router = useRouter();
    const routesWithActive: Ref<RouteWithActive[]> = ref(
      initializeRoutesWithActive(gameScreenRoutes)
    );

    function getRouteName(route: RouteWithActive): string {
      return route.name ? route.name.toString() : 'Unnamed Route';
    }

    function toggleLayer(route: RouteWithActive): void {
      route.meta.isActive = !route.meta.isActive;
      if (route.meta.isActive) {
        router.push(route.path);
      } else {
        router.push('/');
      }
    }

    return {
      routesWithActive,
      toggleLayer,
      getRouteName,
    };
  },
});
</script>

<style scoped>
.layer-panel {
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  background-color: #f5f5f5;
  padding: 16px;
}

.layer-menu {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.layer-toggle {
  width: 100%;
  justify-content: flex-start;
  opacity: 0.6;
  transition: opacity 0.3s;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px 16px;
}

.layer-toggle:hover {
  opacity: 1;
  background-color: #e0e0e0;
}

.layer-toggle.primary {
  background-color: #2196f3;
  color: #fff;
}

.layer-toggle.primary:hover {
  background-color: #1976d2;
}

.layer-display {
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
