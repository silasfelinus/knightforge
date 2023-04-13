// src/router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { components } from '@/stores/componentsGenerator';
import HomePage from '@/components/layout/DemoPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
];

// Add active components to the routes array
components.forEach((component) => {
  if (component.isActive) {
    routes.push({
      path: `/${component.path}`,
      name: component.alias,
      component: eval(component.importPath),
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
