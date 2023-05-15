//homeRoutes: Main page routes
import { RouteRecordRaw } from 'vue-router';
const HomePage1 = () => import('@/sanctuary/ButterflyPage.vue');
const HomePage2 = () => import('@/compostables/AppForge.vue');
const WonderSpace = () => import('@/components/wonderlab/WonderSpace2.vue');
const ComingSoon = () => import('@/components/wonderlab/ComingSoon.vue');

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
  {
    path: '/comingsoon',
    alias: '/coming',
    name: 'ComingSoon',
    component: ComingSoon,
  },
];
