<template>
  <nav>
    <select v-model="selectedProject" @change="updateActiveComponents">
      <option
        v-for="project in projects"
        :key="project.name"
        :value="project.name"
        :disabled="!project.isActive"
      >
        {{ project.name }}
      </option>
    </select>
    <ul v-if="activeComponents.length > 0">
      <li v-for="component in activeComponents" :key="component.alias">
        <router-link :to="{ name: component.alias }" active-class="active">
          {{ component.componentName }}
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
    const selectedProject = ref('');
    const projects = computed((): Project[] => {
      return components.reduce((acc: Project[], component: Component) => {
        if (!acc.some((project) => project.name === component.projectName)) {
          acc.push({
            name: component.projectName,
            isActive: component.isActive,
          });
        }
        return acc;
      }, []);
    });

    const activeComponents = ref<Component[]>([]);

    const updateActiveComponents = () => {
      activeComponents.value = components.filter(
        (component: Component) =>
          component.projectName === selectedProject.value && component.isActive
      );
    };

    return {
      selectedProject,
      projects,
      activeComponents,
      updateActiveComponents,
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
