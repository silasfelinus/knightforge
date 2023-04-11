// src/router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { projects } from '@/stores/projects';

import { addActiveProjectsToRouter } from '@/stores/ActiveComponents';

import ErrorScreen from '@/components/layout/ErrorScreen.vue';
import HomePage from '@/components/layout/HomePage.vue';

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
