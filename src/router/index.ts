import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import ErrorNotFound from '../views/ErrorNotFound.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
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
