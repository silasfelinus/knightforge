import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomePage from '../components/layout/ButterflyHeader.vue';
import GameScreen from '../components/layout/GameScreen.vue';
import LayerMenu from '../components/layout/LayerMenu.vue';

interface GameScreenRouteMeta {
  order: number;
  isActive: boolean;
}

function isGameScreenRouteMeta(meta: unknown): meta is GameScreenRouteMeta {
  return (
    !!meta &&
    typeof (meta as GameScreenRouteMeta).order === 'number' &&
    typeof (meta as GameScreenRouteMeta).isActive === 'boolean'
  );
}

function createGameScreenRoute(
  path: string,
  name: string,
  component: string,
  order: number,
  isActive: boolean
): RouteRecordRaw {
  return {
    path,
    name: name as string,
    component: () =>
      import(/* @vite-ignore */ `../components/gamescreens/${component}.vue`),
    meta: { order, isActive },
  };
}

export const gameScreenRoutes: RouteRecordRaw[] = [
  createGameScreenRoute(
    '/splashviewer',
    'Splash Viewer',
    'SplashViewer',
    1,
    false
  ),
  createGameScreenRoute(
    '/errorscreen',
    'Error Screen',
    'ErrorScreen',
    2,
    false
  ),
  createGameScreenRoute('/graphpaper', 'Graph Paper', 'GraphPaper', 3, false),
  createGameScreenRoute('/lavalamp', 'Lava Lamp', 'LavaLamp', 4, false),
  createGameScreenRoute('/raineffect', 'Rain Effect', 'RainEffect', 5, true),
  createGameScreenRoute(
    '/soapbubbles',
    'Soap Bubbles',
    'SoapBubbles',
    6,
    false
  ),
  createGameScreenRoute(
    '/splashimage',
    'Splash Image',
    'SplashImage',
    7,
    false
  ),
  createGameScreenRoute(
    '/accordiongallery',
    'Accordion Gallery',
    'AccordionGallery',
    8,
    false
  ),
  createGameScreenRoute(
    '/underconstruction',
    'Under Construction',
    'UnderConstruction',
    9,
    false
  ),
];
function getActiveGameScreenRoutes(): RouteRecordRaw[] {
  return gameScreenRoutes
    .filter((route) => isGameScreenRouteMeta(route.meta) && route.meta.isActive)
    .sort(
      (a, b) =>
        (isGameScreenRouteMeta(a.meta) ? a.meta.order : 0) -
        (isGameScreenRouteMeta(b.meta) ? b.meta.order : 0)
    );
}

export const activeGameScreenRoutes = getActiveGameScreenRoutes();

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
