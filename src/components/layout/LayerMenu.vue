<template>
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
.layer-menu {
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: 2px solid red;
  background-color: rgba(255, 255, 0, 0.3);
  padding: 16px;
  z-index: 1000;
}

.layer-toggle {
  width: 100%;
  justify-content: flex-start;
  opacity: 0.6;
  transition: opacity 0.3s;
}

.layer-toggle:hover {
  opacity: 1;
}
</style>
