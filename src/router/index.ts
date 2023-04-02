import { createRouter, createWebHistory } from 'vue-router';
import ErrorNotFound from '@/pages/ErrorNotFound.vue';
import LoginForm from '@/pages/LoginForm.vue';
import Preset from '@/layouts/AppPreset.vue';

const routes = [
  {
    path: '/',
    component: Preset,
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
