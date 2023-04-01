import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import ScreenWidgetWrapper from '@/components/screenspace/ScreenWidgetWrapper.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Main',
    component: ScreenWidgetWrapper,
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
