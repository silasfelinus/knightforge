// src/router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { HomePage, ErrorNotFound } from './ActiveComponents';
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    alias: '/home',
    name: 'HomePage',
    component: HomePage,
    meta: {
      isActive: true,
      sidebarLeftToggle: true,
      sidebarRightToggle: true,
      chatBarToggle: true,
      remoteToggle: true,
    },
  },
  // 😱 ErrorNotFound, the abyss of the unknown!
  {
    path: '/:pathMatch(.*)*',
    name: 'ErrorNotFound',
    component: ErrorNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
export { routes };
