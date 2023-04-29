import { RouteRecordRaw } from 'vue-router';
const AppForge = () => import('@/compostables/AppForge.vue');
const AccordionNav = () => import('@/compostables/AccordionNav.vue');
const AnimationTester = () => import('@/compostables/AnimationTester.vue');
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
  {
    path: '/animator',
    name: 'AnimationTester',
    component: AnimationTester,
  },
  // Add more routes as needed
];
