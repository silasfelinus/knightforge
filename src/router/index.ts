import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import { screenRoutes } from './modules/screenRoutes';
import { mainRoutes } from './modules/mainRoutes';
import { layerRoutes } from './modules/layerRoutes';
import { adminRoutes } from './modules/adminRoutes';
import { homeRoutes } from './modules/homeRoutes';
import { toyboxRoutes } from './modules/toyboxRoutes';

const routes: RouteRecordRaw[] = [
  ...mainRoutes,
  ...screenRoutes,
  ...layerRoutes,
  ...adminRoutes,
  ...homeRoutes,
  ...toyboxRoutes,
  {
    path: '/:catchAll(.*)', // Catch-all route
    redirect: '/errorscreen', // Redirect to Error Screen
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
