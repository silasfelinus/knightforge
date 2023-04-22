import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const HomePage = () => import('../components/layout/HomePage.vue');
const HomePage1 = () => import('../components/WIP/HomePage1.vue');
const AdminPage = () => import('../components/layout/AdminPage.vue');
const AdminPage2 = () => import('../components/layout/AdminPage2.vue');

import { ScreenRoutes } from './ScreenRoutes';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    alias: '/home',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/',
    alias: '/home1',
    name: 'HomePage1',
    component: HomePage1,
  },
  {
    path: '/admin',
    component: AdminPage,
  },
  {
    path: '/admin2',
    component: AdminPage2,
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
