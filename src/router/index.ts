import { createRouter, createWebHistory } from 'vue-router';
import ErrorNotFound from '@/pages/ErrorNotFound.vue';
import LoginForm from '@/pages/LoginForm.vue';

const routes = [
  {
    path: '/',
    component: () => import('pages/MainWindow.vue'),
    meta: { layout: { showHeader: true, showFooter: true, showSidebar: false } },
  },
  {
    path: '/login',
    component: LoginForm,
  },
  {
    path: '/:pathMatch(.*)*',
    component: ErrorNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
