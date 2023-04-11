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
import { routes } from '@/router/index';

export default {
  name: 'NavigationMenu',
  computed: {
    activeRoutes() {
      return routes.filter((route) => route.meta && route.meta.isActive);
    },
  },
};
</script>

<style lang="scss">
nav {
  background-color: #f5f5f5;
  padding: 1rem;
}
</style>
