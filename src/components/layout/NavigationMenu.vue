<template>
  <nav>
    <ul>
      <li v-for="route in sortedActiveRoutes" :key="route.name">
        <router-link :to="{ name: route.name }" active-class="active">
          <i :class="route.icon"></i>
          {{ route.displayName }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { components } from '@/stores/componentsGenerator';
interface Project {
  name: string;
  isActive: boolean;
}

interface Component {
  projectName: string;
  componentName: string;
  fileName: string;
  isActive: boolean;
  path: string;
  alias: string;
  importPath: string;
}

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

    const sortedActiveRoutes = activeRoutes
      .sort((a, b) => {
        return (a.name ?? '').localeCompare(b.name ?? '');
      })
      .map((route) => {
        const component = components.find((c) => c.alias === route.name);
        return {
          ...route,
          displayName: component?.componentName || route.name,
          icon: component?.icon || 'default-icon-class',
        };
      });

    return {
      sortedActiveRoutes,
    };
  },
});
</script>

<style lang="scss">
nav {
  background-color: #f5f5f5;
  padding: 1rem;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  display: inline-block;
  margin-right: 1rem;
}

li:hover {
  cursor: pointer;
}

i {
  margin-right: 0.5rem;
}
</style>
