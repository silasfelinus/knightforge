// src/router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import ErrorNotFound from '../views/ErrorNotFound.vue';
import UnderConstruction from '../views/UnderConstruction.vue';
import HomePage from '../views/HomePage.vue';
import LoginForm from '../views/LoginForm.vue';
import RemoteControl from '../views/RemoteControl.vue';
import ExampleHome from '../example/ExampleHome.vue';
import AccordionGallery from '../views/AccordionGallery.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'AccordionGalleryHome',
    component: AccordionGallery,
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
