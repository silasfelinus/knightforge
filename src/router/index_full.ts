import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import AppLayout from '../layout/AppLayout.vue';
import ScreenWidget from '../views/ScreenWidget.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '',
        component: ScreenWidget,
        meta: {
          layout: { showHeader: true, showFooter: true, showSidebar: true },
          leftSidebar: { show: true },
          rightSidebar: { show: true },
        },
      },
      {
        path: '/splash',
        component: () => import('../views/SplashImage.vue'),
        meta: {
          layout: { showHeader: true, showFooter: true, showSidebar: false },
          leftSidebar: { show: true },
          rightSidebar: { show: true },
        },
      },
      {
        path: '/login',
        component: () => import('../views/LoginForm.vue'),
        meta: {
          layout: { showHeader: true, showFooter: true, showSidebar: false },
          leftSidebar: { show: true },
          rightSidebar: { show: true },
        },
      },
      {
        path: '/under-construction',
        component: () => import('../views/UnderConstruction.vue'),
        meta: {
          layout: { showHeader: true, showFooter: true, showSidebar: false },
          leftSidebar: { show: false },
          rightSidebar: { show: false },
        },
      },
      // Add additional routes here as needed
    ],
  },
  // Catch-all route
  {
    path: '/:catchAll(.*)',
    component: () => import('../views/ErrorNotFound.vue'),
    meta: {
      layout: { showHeader: true, showFooter: true, showSidebar: false },
      leftSidebar: { show: false },
      rightSidebar: { show: false },
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
