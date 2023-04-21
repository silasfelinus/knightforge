<template>
  <div class="component-gallery">
    <component-frame
      v-for="(route, index) in activeRoutes"
      :key="index"
      :class="route.name"
      :component="route.meta.componentName"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import ComponentFrame from './ComponentFrame.vue';
import {
  activeGameScreenRoutes,
  GameScreenRouteMeta,
} from '@/router/gameScreenRoutes';

export default defineComponent({
  components: {
    ComponentFrame,
  },
  setup() {
    const activeRoutes = computed(() => {
      return activeGameScreenRoutes.map((route) => {
        return {
          ...route,
          meta: route.meta as GameScreenRouteMeta,
        };
      });
    });

    return {
      activeRoutes,
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
