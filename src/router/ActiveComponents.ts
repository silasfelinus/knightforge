// src/router/ActiveComponents.ts
const components = {
  HomePage: () => import('../layout/HomePage.vue'),
  AccordionGallery: () => import('../layout/AccordionGallery.vue'),
  MagicFrame: () => import('../layout/MagicFrame.vue'),
  RemoteControl: () => import('../layout/RemoteControl.vue'),
  TitleBar: () => import('../views/TitleBar.vue'),
  NavigationMenu: () => import('../views/NavigationMenu.vue'),
  SplashMessage: () => import('../views/SplashMessage.vue'),
  SoapBubbles: () => import('../components/zoo/SoapBubbles.vue'),
  SplashRandom: () => import('../views/SplashRandom.vue'),
  ExampleHome: () => import('./layout/ExampleHome.vue'),
  ButterflyPage: () => import('./components/butterfly/ButterflyPage.vue'),
  VueViewer: () => import('./views/VueViewer.vue'),
  ZooPage: () => import('./components/zoo/ZooPage.vue'),
  CannonGame: () => import('./components/cannon/TwoPlayerGame.vue'),
  TalkPage: () => import('./components/annyang/NewAnnyang.vue'),
  SpeechKitt: () => import('./components/annyang/SpeechKitt.vue'),
  ChromaChameleon: () => import('./components/zoo/ChromaChameleon.vue'),
  FlockingBirds: () => import('./components/zoo/FlockingBirds.vue'),
  RainEffect: () => import('./components/zoo/RainEffect.vue'),
  ScreenCard: () => import('./layout/ScreenCard.vue'),
  MagicCard: () => import('./layout/MagicCard.vue'),
  LavaLamp: () => import('./components/lava/LavaLamp.vue'),
  Butterfly2: () => import('./components/butterfly/NewButterfly.vue'),
  WildMessage: () => import('./views/WildMessage.vue'),
  GraphPaper: () => import('./components/zoo/GraphPaper.vue'),
  UnderConstruction: () => import('./views/UnderConstruction.vue'),
  ErrorNotFound: () => import('./views/ErrorNotFound.vue'),
};

export const defaultActiveRoutes = Object.entries(components).map(
  ([name, component]) => ({
    name,
    component,
  })
);
export const HomePage = components.HomePage;
export const ErrorNotFound = components.ErrorNotFound;
export const AccordionGallery = components.AccordionGallery;
export const NavigationMenu = components.NavigationMenu;
export const SplashMessage = components.SplashMessage;
