import { createRouter, createWebHistory } from 'vue-router';
import ScreenSet00 from '@/pages/ScreenSet00.vue';

const routes = [
  {
    path: '/',
    component: ScreenSet00,
  },
  // ... other routes
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
