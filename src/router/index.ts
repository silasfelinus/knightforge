import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import ScreenWidget from '../components/screenspace/ScreenWidget.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Main',
    component: ScreenWidget,
    props: {
      side: 'main',
      preset: 'default',
    },
  },
  // Add other routes here
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
