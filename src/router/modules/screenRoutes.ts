//screenRoutes: main component screens
import { RouteRecordRaw } from 'vue-router';
const ChatInterface = () =>
  import('@/components/gamescreens/ChatInterface.vue');
const LayerManager = () => import('@/components/gamescreens/LayerManager.vue');
const LayerMenu = () => import('@/components/gamescreens/LayerMenu.vue');
const SplashFolder = () => import('@/components/gamescreens/SplashFolder.vue');
const SplashImage = () => import('@/components/gamescreens/SplashImage.vue');
const SplashViewer = () => import('@/components/gamescreens/SplashViewer.vue');
const UnderConstruction = () =>
  import('@/components/gamescreens/UnderConstruction.vue');

export const screenRoutes: RouteRecordRaw[] = [
  {
    path: '/chat',
    name: 'ChatInterface',
    component: ChatInterface,
  },
  {
    path: '/layermanager',
    name: 'LayerManager',
    component: LayerManager,
  },
  {
    path: '/layermenu',
    name: 'LayerMenu',
    component: LayerMenu,
  },
  {
    path: '/splashfolder',
    name: 'SplashFolder',
    component: SplashFolder,
  },
  {
    path: '/splashimage',
    name: 'SplashImage',
    component: SplashImage,
  },
  {
    path: '/splashviewer',
    name: 'SplashViewer',
    component: SplashViewer,
  },
  {
    path: '/underconstruction',
    name: 'UnderConstruction',
    component: UnderConstruction,
  },
];
