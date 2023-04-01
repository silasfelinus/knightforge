import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import CardMat from '../components/labspace/CardMat.vue';
import PaintCanvas from '../components/playspace/PaintCanvas.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'CardMat',
    component: CardMat,
  },
  {
    path: '/playspace',
    name: 'PaintCanvas',
    component: PaintCanvas,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
