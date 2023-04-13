<template>
  <nav>
    <ul>
      <li v-for="route in sortedActiveRoutes" :key="route.name">
        <router-link
          @click="navigateTo(route.name)"
          active-class="active"
          :to="{}"
        >
          <i :class="route.icon"></i>
          {{ route.displayName }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { components } from '@/stores/componentsGenerator';
import router from '@/router/index';
import { RouteRecordName } from 'vue-router';

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
        return ((a.name as string) ?? '').localeCompare(
          (b.name as string) ?? ''
        );
      })
      .map((route) => {
        const component = components.find((c) => c.alias === route.name);
        return {
          ...route,
          displayName: component?.componentName || route.name,
          icon: component?.icon || 'default-icon-class',
        };
      });

    async function navigateTo(routeName: RouteRecordName | undefined) {
      if (routeName) {
        try {
          await router.push({ name: routeName });
        } catch (error) {
          console.error('Navigation error:', error);
          // You can handle the error here, e.g. show a notification or message to the user
        }
      }
    }

    return {
      sortedActiveRoutes,
      navigateTo,
    };
  },
});
</script>
