import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomePage1 from '../components/WIP/HomePage6.vue';
import HomePage2 from '../components/WIP/HomePage4.vue';
import HomePage3 from '../components/WIP/HomePage1.vue';
import AdminPage from '../components/layout/AdminPage.vue';

import { ScreenRoutes } from './ScreenRoutes';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    alias: '/home1',
    name: 'HomePage1',
    component: HomePage1,
  },
  {
    path: '/home2',
    name: 'HomePage2',
    component: HomePage2,
  },
  {
    path: '/home3',
    name: 'HomePage3',
    component: HomePage3,
  },
  {
    path: '/admin',
    component: AdminPage,
  },
  ...ScreenRoutes,
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
