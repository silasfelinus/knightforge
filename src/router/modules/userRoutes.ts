//layerRoutes: semi-transparent layers for special effects
import { RouteRecordRaw } from 'vue-router';
const WelcomePage = () => import('@/components/members/WelcomePage.vue');

export const userRoutes: RouteRecordRaw[] = [
  {
    path: '/hello',
    alias: '/welcome',
    name: 'WelcomePage',
    component: WelcomePage,
  },
];
