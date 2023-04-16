<template>
  <q-list class="navigation-menu">
    <q-item v-for="route in gameScreenRoutes" :key="route.path" clickable>
      <q-toggle v-model="route.active" :label="route.name" />
    </q-item>
  </q-list>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { gameScreenRoutes } from '@/router';

export default defineComponent({
  name: 'NavigationMenu',
  setup() {
    gameScreenRoutes.forEach((route) => {
      route.active = false;
    });

    return {
      gameScreenRoutes,
    };
  },
});
</script>

<style scoped>
/* Add custom styles for NavigationMenu here */
.navigation-menu {
  background-color: #f8f9fa;
  border-radius: 4px;
  padding: 8px;
}

.navigation-menu .q-item {
  padding: 8px 16px;
  border-bottom: 1px solid #e9ecef;
}

.navigation-menu .q-item:last-child {
  border-bottom: none;
}

.navigation-menu .q-toggle {
  width: 100%;
}
</style>
