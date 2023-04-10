// src/router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeComponents from '../layout/HomeComponents.vue';
import ErrorScreen from '../layout/ErrorScreen.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    alias: '/home',
    name: 'HomePage',
    component: HomeComponents,
    meta: {
      isActive: true,
      requiresAuth: false,
    },
  },
  // 😱 ErrorNotFound, the abyss of the unknown!
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

export default router;
export { routes };
