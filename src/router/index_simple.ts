import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import ErrorNotFound from '../views/ErrorNotFound.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'ErrorNotFound',
    component: ErrorNotFound,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
