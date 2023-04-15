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
    component: HomePage,
    children: [
      { path: 'butterfly-mascot', component: ButterflyMascot },
      { path: 'game-screen', component: GameScreen },
      { path: 'magic-frame', component: MagicFrame },
      { path: 'magic-remote', component: MagicRemote },
      { path: 'navigation-menu', component: NavigationMenu },
      { path: 'splash-message', component: SplashMessage },
      { path: 'title-bar', component: TitleBar },
      { path: 'accordion-gallery', component: AccordionGallery },
      { path: 'error-screen', component: ErrorScreen },
      { path: 'lava-lamp', component: LavaLamp },
      { path: 'rain-effect', component: RainEffect },
      { path: 'soap-bubbles', component: SoapBubbles },
      { path: 'splash-image', component: SplashImage },
      { path: 'under-construction', component: UnderConstruction },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
