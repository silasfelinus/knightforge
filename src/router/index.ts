import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layout/AppLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('views/SplashPage.vue'),
        meta: {
          layout: { showHeader: false, showFooter: false, showSidebar: false },
        },
      },
      {
        path: '/login',
        component: () => import('views/LoginForm.vue'),
        meta: {
          layout: { showHeader: true, showFooter: true, showSidebar: false },
        },
      },
      // Other routes go here
    ],
  },
  // Catch-all route
  {
    path: '/:catchAll(.*)',
    component: () => import('views/ErrorNotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
