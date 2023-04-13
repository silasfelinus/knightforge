// src/router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import {
  getActiveProjects,
  getActiveComponents,
} from '@/stores/useProjectComponents';
import HomePage from '@/components/layout/TitleBar.vue';

const activeProjects = getActiveProjects();
const activeComponents = getActiveComponents();

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
];

// Add active components to the routes array
activeComponents.forEach((component) => {
  const project = activeProjects.find((project) =>
    project.componentStrings.includes(component)
  );

  if (project) {
    routes.push({
      path: `/${component}`,
      name: component,
      component: () =>
        import(
          /* @vite-ignore */ `@/components/${project.name}/${component}.vue`
        ),
    });
  }
});

// Add a catch-all route for 404 errors
routes.push({
  path: '/:pathMatch(.*)*',
  name: 'NotFound',
  component: () => import('@/components/layout/ErrorScreen.vue'),
});

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
