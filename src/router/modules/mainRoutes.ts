//homeRoutes: Main page routes
import { RouteRecordRaw } from 'vue-router';
const HomePage1 = () => import('@/compostables/AppForge.vue');
const HomePage2 = () => import('@/components/WIP/HomePage1.vue');
const WonderSpace1 = () => import('@/components/wonderlab/WonderSpace.vue');
const WonderSpace2 = () => import('@/components/wonderlab/WonderSpace2.vue');
const ComingSoon = () => import('@/components/wonderlab/ComingSoon.vue');

export const mainRoutes: RouteRecordRaw[] = [
  {
    path: '/h',
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
    component: WonderSpace1,
  },
  {
    path: '/wonderlab2',
    alias: '/lab2',
    name: 'WonderLab2',
    component: WonderSpace2,
  },
  {
    path: '/comingsoon',
    alias: '/coming',
    name: 'ComingSoon',
    component: ComingSoon,
  },
];
