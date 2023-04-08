// src/router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import ErrorNotFound from '../views/ErrorNotFound.vue';
import UnderConstruction from '../views/UnderConstruction.vue';
import HomePage from '../layout/HomePage.vue';
import LoginForm from '../views/LoginForm.vue';
import RemoteControl from '../layout/RemoteControl.vue';
import ExampleHome from '../example/ExampleHome.vue';
import AccordionGallery from '../layout/AccordionGallery.vue';
import ButterflyPage from '../butterfly/ButterflyPage.vue';
import FullPageWrapper from '../layout/FullPageWrapper.vue';
import VueViewer from '../views/VueViewer.vue';
import ZooPage from '../zoo/ZooPage.vue';
import CannonGame from '../cannon/TwoPlayerGame.vue';
import TalkPage from '../annyang/NewAnnyang.vue';
import SpeechKitt from '../annyang/SpeechKitt.vue';
import GraphPaper from '../zoo/GraphPaper.vue';
import ChromaChameleon from '../zoo/ChromaChameleon.vue';
import FlockingBirds from '../zoo/FlockingBirds.vue';
import SoapBubbles from '../zoo/SoapBubbles.vue';
import RainEffect from '../zoo/RainEffect.vue';
import ScreenCard from '../layout/ScreenCard.vue';
import MagicCard from '../layout/MagicCard.vue';
import LavaLamp from '../lava/LavaLamp.vue';
import TitleBar from '../codepen/TitleBar.vue';
import RainbowCircle from '../codepen/RainbowCircle.vue';
import Butterfly from '/../butterfly/NewButterflyPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'AccordionGalleryHome',
    component: HomePage,
    meta: { isActive: true },
  },
  {
    path: '/home',
    name: 'HomePage',
    component: HomePage,
    meta: { isActive: true },
  },
  {
    path: '/construction',
    name: 'UnderConstruction',
    component: UnderConstruction,
    meta: { isActive: true },
  },
  {
    path: '/view',
    name: 'VueViewer',
    component: VueViewer,
    meta: { isActive: false },
  },
  {
    path: '/gallery',
    name: 'AccordionGallery',
    component: AccordionGallery,
    meta: { isActive: true },
  },
  {
    path: '/example',
    name: 'ExampleHome',
    component: ExampleHome,
    meta: { isActive: false },
  },
  {
    path: '/login',
    name: 'LoginForm',
    component: LoginForm,
    meta: { isActive: false },
  },
  {
    path: '/remote',
    name: 'RemoteControl',
    component: RemoteControl,
    meta: { isActive: false },
  },
  {
    path: '/butterfly',
    name: 'ButterflyPage',
    component: ButterflyPage,
    meta: { isActive: true },
  },
  {
    path: '/wrapper',
    name: 'FullPageWrapper',
    component: FullPageWrapper,
    meta: { isActive: false },
  },
  {
    path: '/zoo',
    name: 'ZooPage',
    component: ZooPage,
    meta: { isActive: false },
  },
  {
    path: '/cannon',
    name: 'CannonGame',
    component: CannonGame,
    meta: { isActive: true },
  },
  {
    path: '/talk',
    name: 'TalkPage',
    component: TalkPage,
    meta: { isActive: true },
  },
  {
    path: '/kitt',
    name: 'SpeechKitt',
    component: SpeechKitt,
    meta: { isActive: true },
  },
  {
    path: '/graph',
    name: 'GraphPaper',
    component: GraphPaper,
    meta: { isActive: true },
  },
  {
    path: '/bubbles',
    name: 'SoapBubbles',
    component: SoapBubbles,
    meta: { isActive: true },
  },
  {
    path: '/chroma',
    name: 'ChromaChameleon',
    component: ChromaChameleon,
    meta: { isActive: true },
  },
  {
    path: '/birds',
    name: 'FlockingBirds',
    component: FlockingBirds,
    meta: { isActive: true },
  },
  {
    path: '/rain',
    name: 'RainEffect',
    component: RainEffect,
    meta: { isActive: true },
  },
  {
    path: '/card',
    name: 'ScreenCard',
    component: ScreenCard,
    meta: { isActive: true },
  },
  {
    path: '/magic',
    name: 'MagicCard',
    component: MagicCard,
    meta: { isActive: true },
  },
  {
    path: '/title',
    name: 'TitleBar',
    component: TitleBar,
    meta: { isActive: true },
  },
  {
    path: '/rainbow',
    name: 'RainbowCircle',
    component: RainbowCircle,
    meta: { isActive: true },
  },
  {
    path: '/lava',
    name: 'LavaLamp',
    component: LavaLamp,
    meta: { isActive: true },
  },
  {
    path: '/butter2',
    name: 'Butterfly',
    component: NewButterfly,
    meta: { isActive: true },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'ErrorNotFound',
    component: ErrorNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
export { routes };
