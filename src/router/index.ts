import { createRouter, createWebHistory } from 'vue-router';
import ErrorNotFound from '@/pages/ErrorNotFound.vue';
import LoginForm from '@/pages/LoginForm.vue';

const PRESET = 'SplashScreen'; // Change this to switch between presets

// Presets list (for reference)
// AppSimple
// AppWorking
// AppFull
// UnderConstruction
// WarningScreen
// SplashScreen

const routes = [
  {
    path: '/',
    component: () =>
      import(/* @vite-ignore */ `@/pages/${PRESET}.vue`).catch(() => {
        console.error(`Failed to load preset: ${PRESET}`);
        return ErrorNotFound;
      }),
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
