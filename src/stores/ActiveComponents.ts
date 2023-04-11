// src/ActiveComponents.ts

import { Project } from '@/stores/types';
import { RouteRecordRaw, Router } from 'vue-router';

function getActiveProjects(projects: Project[]): Project[] {
  return projects.filter((project) => project.isActive);
}

export function createRoute(
  project: Project,
  componentName: string
): RouteRecordRaw {
  return {
    path: `/${project.name}/${componentName}`,
    name: `${project.name}-${componentName}`,
    meta: {
      isActive: project.isActive,
    },
    component: () =>
      import(
        /* @vite-ignore */
        `@/components/${project.name}/${componentName}.vue`
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

export function addActiveProjectsToRouter(projects: Project[], router: Router) {
  const activeProjects = getActiveProjects(projects);
  const routes: RouteRecordRaw[] = createRoutes(activeProjects);
  addRoutesToRouter(router, routes);
}
