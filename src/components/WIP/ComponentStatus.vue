// ComponentStatus.vue - A management page to display active routes and their
associated components. // - Utilizes 'vue-router' for fetching active routes and
their components. // - Displays components sorted into sections with status
light indicators.

<template>
  <div class="component-status">
    <h1>Component Status</h1>
    <div v-for="section in sections" :key="section.name">
      <h2>{{ section.name }}</h2>
      <ul>
        <li v-for="component in section.components" :key="component.name">
          <status-light :is-active="isActiveRoute(component.route)" />
          <span>{{ component.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import StatusLight from '@/components/WIP/StatusLight.vue.js';

export default defineComponent({
  name: 'ComponentStatus',
  components: {
    StatusLight,
  },
  setup() {
    const route = useRoute();

    const sections = [
      {
        name: 'Section 1',
        components: [
          { name: 'Component1', route: '/component1' },
          { name: 'Component2', route: '/component2' },
        ],
      },
      // Additional sections...
    ];

    function isActiveRoute(routePath: string) {
      return route.path === routePath;
    }

    return {
      sections,
      isActiveRoute,
    };
  },
});
</script>
