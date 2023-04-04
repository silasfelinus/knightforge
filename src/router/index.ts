import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import ErrorNotFound from '../views/ErrorNotFound.vue';
import UnderConstruction from '../views/UnderConstruction.vue';
import HomePage from '../views/HomePage.vue';
import LoginForm from '../views/LoginForm.vue';
import RemoteControl from '../views/RemoteControl.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/under-construction',
    name: 'UnderConstruction',
    component: UnderConstruction,
  },
  {
    path: '/login',
    name: 'LoginForm',
    component: LoginForm,
  },
  {
    path: '/remote-control',
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
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
