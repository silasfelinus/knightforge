import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomePage from '@/layout/HomePage.vue';
import ButterflyMascot from '@/layout/ButterflyMascot.vue';
import GameScreen from '@/layout/GameScreen.vue';
import MagicFrame from '@/layout/MagicFrame.vue';
import MagicRemote from '@/layout/MagicRemote.vue';
import NavigationMenu from '@/layout/NavigationMenu.vue';
import SplashMessage from '@/layout/SplashMessage.vue';
import TitleBar from '@/layout/TitleBar.vue';
import AccordionGallery from '@/gamescreens/AccordionGallery.vue';
import ErrorScreen from '@/gamescreens/ErrorScreen.vue';
import LavaLamp from '@/gamescreens/LavaLamp.vue';
import RainEffect from '@/gamescreens/RainEffect.vue';
import SoapBubbles from '@/gamescreens/SoapBubbles.vue';
import SplashImage from '@/gamescreens/SplashImage.vue';
import UnderConstruction from '@/gamescreens/UnderConstruction.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
    children: [
      {
        path: '/navigationmenu',
        component: NavigationMenu,
      },
      {
        path: '/magicframe',
        component: MagicFrame,
        children: [
          {
            path: '/gamescreen',
            component: GameScreen,
            children: [
              {
                path: '/gamescreen/1/',
                component: GameScreen,
              },
          },
        ],
      },
      {
        path: '/magicremote',
        component: MagicRemote,
      },
    ],
  },
  ...generateRoutesFromProjects(getActiveProjects()),
  {
    path: '/:catchAll(.*)',
    name: 'ErrorScreen',
    component: ErrorScreen,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
