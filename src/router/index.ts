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
import TalkPage from '../annyang/TalkPage.vue';
import GraphPaper from '../zoo/GraphPaper.vue';
import SoapBubbles from '../zoo/SoapBubbles.vue';

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
    meta: { isActive: true },
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
