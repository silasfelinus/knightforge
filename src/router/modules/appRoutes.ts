import { RouteRecordRaw } from 'vue-router';
const AppForge = () => import('@/compostables/AppForge.vue');

export const appRoutes: RouteRecordRaw[] = [
  {
    path: '/app',
    name: 'AppForge',
    component: AppForge,
  },
  // Add more routes as needed
];
