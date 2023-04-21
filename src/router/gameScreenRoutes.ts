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

function createGameScreenRoute({
  path,
  name,
  order,
  isActive,
}: {
  path: string;
  name: string;
  order: number;
  isActive: boolean;
}): RouteRecordRaw {
  return {
    path,
    name,
    component: () =>
      import(/* @vite-ignore */ `../components/gamescreens/${name}.vue`),
    meta: { order, isActive, componentName: name },
  };
}

const routeData = [
  { path: '/splashviewer', name: 'SplashViewer', order: 1, isActive: false },
  { path: '/errorscreen', name: 'ErrorScreen', order: 2, isActive: false },
  { path: '/graphpaper', name: 'GraphPaper', order: 3, isActive: false },
  { path: '/lavalamp', name: 'LavaLamp', order: 4, isActive: false },
  { path: '/raineffect', name: 'RainEffect', order: 5, isActive: true },
  { path: '/soapbubbles', name: 'SoapBubbles', order: 6, isActive: false },
  { path: '/splashimage', name: 'SplashImage', order: 7, isActive: false },
  {
    path: '/accordiongallery',
    name: 'AccordionGallery',
    order: 8,
    isActive: false,
  },
  {
    path: '/underconstruction',
    name: 'UnderConstruction',
    order: 9,
    isActive: false,
  },
];

export const gameScreenRoutes: RouteRecordRaw[] = routeData.map(
  createGameScreenRoute
);

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
