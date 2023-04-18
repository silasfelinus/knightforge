import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomePage from '@/components/layout/HomePage.vue';
import GameScreen from '@/components/layout/GameScreen.vue';
import LayerMenu from '@/components/layout/LayerMenu.vue';

export const gameScreenRoutes: RouteRecordRaw[] = [
  {
    path: '/splashviewer',
    name: 'Splash Viewer',
    component: () => import('@/components/gamescreens/SplashViewer.vue'),
    meta: { order: 1, isActive: false },
  },
  {
    path: '/errorscreen',
    name: 'Error Screen',
    component: () => import('@/components/gamescreens/ErrorScreen.vue'),
    meta: { order: 2, isActive: false },
  },
  {
    path: '/graphpaper',
    name: 'Graph Paper',
    component: () => import('@/components/gamescreens/GraphPaper.vue'),
    meta: { order: 3, isActive: false },
  },
  {
    path: '/lavalamp',
    name: 'Lava Lamp',
    component: () => import('@/components/gamescreens/LavaLamp.vue'),
    meta: { order: 4, isActive: false },
  },
  {
    path: '/raineffect',
    name: 'Rain Effect',
    component: () => import('@/components/gamescreens/RainEffect.vue'),
    meta: { order: 5, isActive: true },
  },
  {
    path: '/soapbubbles',
    name: 'Soap Bubbles',
    component: () => import('@/components/gamescreens/SoapBubbles.vue'),
    meta: { order: 6, isActive: false },
  },
  {
    path: '/splashimage',
    name: 'Splash Image',
    component: () => import('@/components/gamescreens/SplashImage.vue'),
    meta: { order: 7, isActive: false },
  },
  {
    path: '/accordiongallery',
    name: 'Accordion Gallery',
    component: () => import('@/components/gamescreens/AccordionGallery.vue'),
    meta: { order: 8, isActive: false },
  },
  {
    path: '/underconstruction',
    name: 'Under Construction',
    component: () => import('@/components/gamescreens/UnderConstruction.vue'),
    meta: { order: 9, isActive: false },
  },
];

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/layer',
    component: LayerMenu,
  },
  {
    path: '/gamescreen',
    component: GameScreen,
  },
  ...gameScreenRoutes,
  {
    path: '/:catchAll(.*)', // Catch-all route
    redirect: '/errorscreen', // Redirect to Error Screen
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
