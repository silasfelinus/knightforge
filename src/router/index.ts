// src/router/index.ts
import {
  createRouter,
  createWebHistory,
  Router,
  RouteRecordRaw,
} from 'vue-router';
import { Project } from '@/stores/types';
import { projects } from '@/stores/projects';

import ErrorScreen from '@/components/layout/ErrorScreen.vue';
import HomePage from '@/components/layout/HomePage.vue';

function getActiveProjects(projects: Project[]): Project[] {
  return projects.filter((project) => project.isActive);
}

function createRoute(project: Project, componentName: string): RouteRecordRaw {
  return {
    path: `/${project.name.toLowerCase()}/${componentName.toLowerCase()}`,
    name: `${project.name}-${componentName}`,
    meta: {
      isActive: project.isActive,
    },
    component: () =>
      import(
        /* @vite-ignore */
        `@/components/${project.name.toLowerCase()}/${componentName}.vue`
      ).catch(() => {
        console.error(
          `Error loading component for project: ${project.name}, component: ${componentName}`
        );
        return Promise.reject(new Error('Failed to load component'));
      }),
  };
}

function createRoutes(activeProjects: Project[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = [];

  activeProjects.forEach((project) => {
    project.components.forEach((componentName) => {
      const route = createRoute(project, componentName);
      routes.push(route);
    });
  });

  return routes;
}

function addRoutesToRouter(router: Router, routes: RouteRecordRaw[]) {
  routes.forEach((route: RouteRecordRaw) => {
    router.addRoute(route);
  });
}

function addActiveProjectsToRouter(projects: Project[], router: Router) {
  const activeProjects = getActiveProjects(projects);
  const routes: RouteRecordRaw[] = createRoutes(activeProjects);
  addRoutesToRouter(router, routes);
}

// Add the HomePage route and the ErrorScreen route as the last route in the array
const routes: RouteRecordRaw[] = [
  {
    path: '/', // <-- Add this route for the HomePage
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'ErrorScreen',
    component: ErrorScreen,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Call the addActiveProjectsToRouter function
addActiveProjectsToRouter(projects, router);

export default router;
export { routes };
