<!-- components/NavigationMenu.vue -->
<template>
  <nav>
    <ul>
      <li v-for="route in activeRoutes" :key="route.name">
        <router-link :to="{ name: route.name }" active-class="active">{{
          route.name
        }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { routes } from '../router/index';

export default {
  name: 'NavigationMenu',
  props: {
    routes: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    activeRoutes() {
      return this.routes.filter((route) => route.meta && route.meta.isActive);
    },
  },
};
</script>
