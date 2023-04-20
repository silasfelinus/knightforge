import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomePage from '../components/layout/SplitFlap.vue';
import GameScreen from '../components/layout/GameScreen.vue';
import LayerMenu from '../components/layout/LayerMenu.vue';

import { gameScreenRoutes } from './gameScreenRoutes';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/layermenu',
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
