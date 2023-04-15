// src/router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { getActiveProjects } from '@/stores/useProjectComponents';
import HomePage from '@/components/layout/HomePage.vue';
import ErrorScreen from '@/components/layout/ErrorScreen.vue';
import MagicRemote from '@/components/MagicRemote.vue';
import MagicFrame from '@/components/layout/MagicFrame.vue';
import NavigationMenu from '@/components/layout/NavigationMenu.vue';

interface Project {
  id: string;
  isActive?: boolean;
  icon?: string;
  // An array of component names as strings
  componentStrings: string[];
}

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
    children: [
      {
        path: 'navigationmenu',
        component: NavigationMenu,
      },
      {
        path: 'magicframe',
        component: MagicFrame,
        children: [
          {
            path: 'gamescreen',
            component: GameScreen,
          },
        ],
      },
      {
        path: 'magicremote',
        component: MagicRemote,
      },
    ],
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
