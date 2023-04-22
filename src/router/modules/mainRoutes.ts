//homeRoutes: Main page routes
import { RouteRecordRaw } from 'vue-router';
const HomePage1 = () => import('@/components/layout/HomePage.vue');
const HomePage2 = () => import('@/components/WIP/HomePage1.vue');
const WonderSpace = () => import('@/components/wonderlab/WonderSpace.vue');

export const mainRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    alias: '/home1',
    name: 'HomePage',
    component: HomePage1,
  },
  {
    path: '/home2',
    name: 'HomePage2',
    component: HomePage2,
  },
  {
    path: '/wonderlab',
    alias: '/lab',
    name: 'WonderLab',
    component: WonderSpace,
  },
];
