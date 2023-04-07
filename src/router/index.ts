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

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'AccordionGalleryHome',
    component: HomePage,
  },
  {
    path: '/home',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/construction',
    name: 'UnderConstruction',
    component: UnderConstruction,
  },
  {
    path: '/view',
    name: 'VueViewer',
    component: VueViewer,
  },
  {
    path: '/gallery',
    name: 'AccordionGallery',
    component: AccordionGallery,
  },
  {
    path: '/example',
    name: 'ExampleHome',
    component: ExampleHome,
  },
  {
    path: '/login',
    name: 'LoginForm',
    component: LoginForm,
  },
  {
    path: '/remote',
    name: 'RemoteControl',
    component: RemoteControl,
  },
  {
    path: '/butterfly',
    name: 'ButterflyPage',
    component: ButterflyPage,
  },
  {
    path: '/wrapper',
    name: 'FullPageWrapper',
    component: FullPageWrapper,
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
