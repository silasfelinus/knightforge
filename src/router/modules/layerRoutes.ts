//layerRoutes: semi-transparent layers for special effects
import { RouteRecordRaw } from 'vue-router';
const GraphPaper = () => import('@/components/gamescreens/GraphPaper.vue');
const LavaLamp = () => import('@/components/gamescreens/LavaLamp.vue');
const RainEffect = () => import('@/components/gamescreens/RainEffect.vue');
const SoapBubbles = () => import('@/components/gamescreens/SoapBubbles.vue');
const TitleBar = () => import('@/components/gamescreens/TitleBar.vue');
const SplashMessage = () =>
  import('@/components/gamescreens/SplashMessage.vue');
const SplitFlap = () => import('@/components/gamescreens/SplitFlap.vue');

export const layerRoutes: RouteRecordRaw[] = [
  {
    path: '/graph',
    alias: '/graphpaper',
    name: 'GraphPaper',
    component: GraphPaper,
  },
  {
    path: '/lavalamp',
    name: 'LavaLamp',
    component: LavaLamp,
  },
  {
    path: '/rain',
    alias: '/raineffect',
    name: 'RainEffect',
    component: RainEffect,
  },
  {
    path: '/bubbles',
    alias: '/soapbubbles',
    name: 'SoapBubbles',
    component: SoapBubbles,
  },
  {
    path: '/titlebar',
    name: 'TitleBar',
    component: TitleBar,
  },
  {
    path: '/splashmessage',
    name: 'SplashMessage',
    component: SplashMessage,
  },
  {
    path: '/splitflap',
    name: 'SplitFlap',
    component: SplitFlap,
  },
];
