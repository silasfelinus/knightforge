// gameScreenRoutes.ts
import { RouteRecordRaw } from 'vue-router';

export interface GameScreenRouteMeta {
  order: number;
  isActive: boolean;
  componentName: string;
}

export function isGameScreenRouteMeta(
  meta: unknown
): meta is GameScreenRouteMeta {
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
    meta: { order, isActive, componentName: component },
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
