import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomePage from '@/components/layout/HomePage.vue';
import ButterflyMascot from '@/components/layout/ButterflyMascot1.vue';
import MagicFrame from '@/components/layout/MagicFrame.vue';
import NavigationMenu from '@/components/layout/NavigationMenu.vue';
import SplashMessage from '@/components/layout/SplashMessage.vue';
import TitleBar from '@/components/layout/TitleBar.vue';

export const gameScreenRoutes: RouteRecordRaw[] = [
  {
    path: 'accordion-gallery',
    component: () => import('@/components/gamescreens/AccordionGallery.vue'),
  },
  {
    path: 'error-screen',
    component: () => import('@/components/gamescreens/ErrorScreen.vue'),
  },
  {
    path: 'game-screen',
    component: () => import('@/components/gamescreens/GameScreen.vue'),
  },
  {
    path: 'lava-lamp',
    component: () => import('@/components/gamescreens/LavaLamp.vue'),
  },

  {
    path: 'magic-remote',
    component: () => import('@/components/layout/MagicRemote.vue'),
  },
  {
    path: 'rain-effect',
    component: () => import('@/components/gamescreens/RainEffect.vue'),
  },
  {
    path: 'soap-bubbles',
    component: () => import('@/components/gamescreens/SoapBubbles.vue'),
  },
  {
    path: 'splash-image',
    component: () => import('@/components/gamescreens/SplashImage.vue'),
  },
  {
    path: 'under-construction',
    component: () => import('@/components/gamescreens/UnderConstruction.vue'),
  },
];

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: HomePage,
    children: [
      { path: 'butterfly-mascot', component: ButterflyMascot },
      { path: 'magic-frame', component: MagicFrame },
      { path: 'navigation-menu', component: NavigationMenu },
      { path: 'splash-message', component: SplashMessage },
      { path: 'title-bar', component: TitleBar },
      ...gameScreenRoutes,
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
