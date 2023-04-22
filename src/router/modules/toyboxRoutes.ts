//toyboxRoutes: toys for playspace
import { RouteRecordRaw } from 'vue-router';
const ButterflyHorde = () =>
  import('@/components/gamescreens/ButterflyHorde.vue');
const ButterflySingle = () =>
  import('@/components/gamescreens/ButterflySimple.vue');
const DraggableComponent = () =>
  import('@/components/wonderlab/DraggableComponent.vue');
const ButterflyChest = () =>
  import('@/components/butterfly/ButterflyChest.vue');

export const toyboxRoutes: RouteRecordRaw[] = [
  {
    path: '/butterflies',
    alias: '/horde',
    name: 'Butterflies',
    component: ButterflyHorde,
  },
  {
    path: '/butterfly',
    name: 'Butterfly',
    component: ButterflySingle,
  },
  {
    path: '/magicbox',
    name: 'DraggableComponent',
    component: DraggableComponent,
  },
  {
    path: '/butterflychest',
    name: 'ButterflyChest',
    component: ButterflyChest,
  },
];
