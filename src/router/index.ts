import { createRouter, createWebHistory } from 'vue-router';
import ErrorNotFound from '@/pages/ErrorNotFound.vue';
import AppSimple from '@/pages/AppSimple.vue';
import AppWorking from '@/pages/AppWorking.vue';
import AppFull from '@/pages/AppFull.vue';
import LoginForm from '@/pages/LoginForm.vue';
import UnderConstruction from '@/pages/UnderConstruction.vue';
import WarningScreen from '@/pages/WarningScreen.vue';

const PRESET = 'AppSimple'; // Change this to switch between presets

const routes = [
  {
    path: '/',
    component: {
      AppSimple,
      AppWorking,
      AppFull,
      UnderConstruction,
      WarningScreen,
    }[PRESET],
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
