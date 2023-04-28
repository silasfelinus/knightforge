import { RouteRecordRaw } from 'vue-router';
const AppForge = () => import('@/compostables/AppForge.vue');
const AccordionNav = () => import('@/compostables/AccordionNav.vue');
const ButterflySanctuary = () =>
  import('@/compostables/ButterflySanctuary.vue');

export const appRoutes: RouteRecordRaw[] = [
  {
    path: '/app',
    name: 'AppForge',
    component: AppForge,
  },
  {
    path: '/accordion',
    name: 'AccordionNav',
    component: AccordionNav,
  },
  {
    path: '/sanctuary',
    name: 'ButterflySanctuary',
    component: ButterflySanctuary,
  },
  // Add more routes as needed
];
