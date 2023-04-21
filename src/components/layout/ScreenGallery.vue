<template>
  <div class="component-gallery">
    <component-frame
      v-for="(route, index) in activeRoutes"
      :key="index"
      :class="route.name"
      :component="components[route.meta.componentName]"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, defineAsyncComponent } from 'vue';
import { RouteRecordRaw } from 'vue-router';
import ComponentFrame from './ComponentFrame.vue';
import {
  activeGameScreenRoutes,
  ScreenRouteMeta,
  isScreenRouteMeta,
} from '@/router/ScreenRoutes';

export default defineComponent({
  components: {
    ComponentFrame,
  },
  setup() {
    const activeRoutes = computed(() => {
      return activeGameScreenRoutes.reduce((acc: RouteRecordRaw[], route) => {
        if (isScreenRouteMeta(route.meta)) {
          acc.push({
            ...route,
            meta: route.meta as ScreenRouteMeta,
          });
        }
        return acc;
      }, []);
    });

    const components = activeRoutes.value.reduce(
      (acc: { [key: string]: any }, route) => {
        acc[route.meta.componentName] = defineAsyncComponent(
          () =>
            import(
              /* @vite-ignore */ `../gamescreens/${route.meta.componentName}.vue`
            )
        );
        return acc;
      },
      {}
    );

    return {
      activeRoutes,
      components,
    };
  },
});
</script>

<style scoped>
.component-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  width: 100%;
}

.component-frame {
  width: 100%;
  height: 100%;
}

/* Responsive rules */
@media (max-width: 1024px) {
  .component-gallery {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
}

@media (max-width: 768px) {
  .component-gallery {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
}
</style>
