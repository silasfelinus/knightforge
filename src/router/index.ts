import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import {
  getActiveProjects,
  getActiveComponents,
} from '@/stores/useProjectComponents';
import HomePage from '@/components/layout/HomePage.vue';

const activeProjects = getActiveProjects();
const activeComponents = getActiveComponents();

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
];

function toPascalCase(str: string): string {
  return str.replace(/(^\w|-\w)/g, (c) => c.replace('-', '').toUpperCase());
}

// Add this function before the `routes` array
async function loadComponent(projectId: string, componentName: string) {
  try {
    const module = await import(
      /* @vite-ignore */ `@/components/${projectId}/${componentName}.vue`
    );
    return module.default;
  } catch (error) {
    console.error('Error loading component:', error);
    return () => import('@/components/layout/ErrorScreen.vue');
  }
}

// Add active components to the routes array
activeComponents.forEach((component) => {
  const project = activeProjects.find((project) =>
    project.componentStrings.includes(component)
  );

  if (project) {
    const lowerCaseComponent = component.toLowerCase();
    const pascalCaseComponent = toPascalCase(component);
    routes.push({
      path: `/${lowerCaseComponent}`,
      name: component,
      component: () => loadComponent(project.id, pascalCaseComponent), // Replace the component property here
    });
  }
});

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
