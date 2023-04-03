import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/AppLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/MainWindow.vue'),
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
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
