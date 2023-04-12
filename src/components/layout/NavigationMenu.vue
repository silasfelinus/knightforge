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

<script lang="ts">
import { defineComponent } from 'vue';
import router from '@/router/index';
import { components } from '@/stores/componentsGenerator';

export default defineComponent({
  name: 'NavigationMenu',
  setup() {
    const activeRoutes = router.options.routes.filter(
      (route) =>
        route.name &&
        components.some(
          (component) => component.alias === route.name && component.isActive
        )
    );

    return {
      activeRoutes,
    };
  },
});
</script>

<style lang="scss">
nav {
  background-color: #f5f5f5;
  padding: 1rem;
}
</style>
