// src/router/ActiveComponents.ts

//ActiveComponents lazy loads all components
//and assigns default component status to prefered components

const components = {
  // Website Framework
  HomePage: () => import('../layout/HomePage.vue'),
  ErrorPage: () => import('../views/ErrorNotFound.vue'),
  ConstructionPage: () => import('../views/UnderConstruction.vue'),
  //AdventurePage

  // Structure
  TitleBar: () => import('../views/TitleBar.vue'),
  NavigationMenu: () => import('../views/NavigationMenu.vue'), //future accordion implementation
  AccordionGallery: () => import('../layout/AccordionGallery.vue'), //future gallery viewer
  AssetManager: () => import('../views/VueViewer.vue'), //asset crud
  VoiceControl: () => import('../components/annyang/SpeechKitt.vue'), //needs polish
  UserSettings: () => import('../componens/UserLogin.vue'), //not implemented
  GameController: () => import('../layout/RemoteControl.vue'), //screen controller
  MagicFrame: () => import('../layout/MagicScreen.vue'), //window frame with Mascot integration
  AvatarCard: () => import('../layout/ScreenCard.vue'), //custom card
  
  //Assets
  RandomMessage: () => import('../views/SplashMessage.vue'), //random motivational message
  RandomImage: () => import('../views/SplashRandom.vue'), //random image from "random" gallery
  SampleMascot: () => import('../components/butterfly/NewButterfly.vue'),
  SampleEffect: () => import('../components/zoo/RainEffect.vue'),
};

export const defaultActiveRoutes = Object.entries(components).map(
  ([name, component]) => ({
    name,
    component,
  })
);
