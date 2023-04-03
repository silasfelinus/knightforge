import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layout/AppLayoutWrapper.vue'),
    children: [
      {
        path: '',
        component: () => import('layout/ScreenWidget.vue'),
        meta: {
          layout: { showHeader: true, showFooter: true, showSidebar: true },
        },
      },
      {
        path: '/splash',
        component: () => import('views/SplashImage.vue'),
      },
      {
        path: '/login',
        component: () => import('views/LoginForm.vue'),
      },
      {
        path: '/remote-control',
        component: () => import('views/RemoteControl.vue'),
      },
      {
        path: '/under-construction',
        component: () => import('views/UnderConstruction.vue'),
      },
      {
        path: '/title-bar',
        component: () => import('views/TitleBar.vue'),
      },
      // Add additional routes here as needed
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
