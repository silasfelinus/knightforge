<template>
  <div>
    <h2>Projects</h2>
    <ul>
      <li v-for="project in projects" :key="project.name">
        {{ project.name }} ({{ project.isActive ? 'active' : 'inactive' }})
        <ul>
          <li v-for="component in project.components" :key="component">
            {{ component }} ({{
              componentIsActive(project, component) ? 'active' : 'inactive'
            }})
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { projects } from '@/stores/projects';
import { Project } from '@/stores/types';

export default defineComponent({
  name: 'ProjectsList',
  setup() {
    const componentIsActive = (project: Project, component: string) => {
      return project.isActive && project.components.includes(component);
    };

    return {
      projects,
      componentIsActive,
    };
  },
});
</script>
