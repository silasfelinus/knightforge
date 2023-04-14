// src/router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { getActiveProjects, Project } from '@/stores/useProjectComponents';
import HomePage from '@/components/layout/HomePage.vue';
import ErrorScreen from '@/components/layout/ErrorScreen.vue';

// Generate routes for each component
function generateRoutesFromProjects(projects: Project[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = [];

  projects.forEach((project) => {
    project.componentStrings.forEach((componentString) => {
      const route: RouteRecordRaw = {
        path: `/${componentString.toLowerCase()}`,
        name: componentString,
        component: () =>
          import(
            /* @vite-ignore */
            /* webpackChunkName: "[request]" */
            `../components/${project.id}/${componentString}.vue`
          ),
      };
      routes.push(route);
    });
  });

  return routes;
}

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  ...generateRoutesFromProjects(getActiveProjects()),
  {
    path: '/:catchAll(.*)',
    name: 'ErrorScreen',
    component: ErrorScreen,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
