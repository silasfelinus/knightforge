<template>
  <q-list class="navigation-menu">
    <q-item v-for="route in gameScreenRoutes" :key="route.path">
      <router-link :to="route.path">
        <q-item-section>
          {{ route.path }}
        </q-item-section>
      </router-link>
    </q-item>
  </q-list>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { gameScreenRoutes } from '@/router';

export default defineComponent({
  name: 'NavigationMenu',
  setup() {
    return {
      gameScreenRoutes,
    };
  },
});
</script>

<style scoped>
/* Add custom styles for NavigationMenu here */
</style>
