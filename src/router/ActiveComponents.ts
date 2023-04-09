// src/router/ActiveComponents.ts

//ActiveComponents lazy loads all components
//and assigns default component status to prefered components

const components = {
  // Website Framework
  HomePage: () => import('../layout/HomePage.vue'),
  ErrorPage: () => import('../views/ErrorNotFound.vue'),
  ConstructionPage: () => import('../views/UnderConstruction.vue'),

  // Website Layout
  TitleBar: () => import('../views/TitleBar.vue'),
  NavigationMenu: () => import('../views/NavigationMenu.vue'),
  NavigationGallery: () => import('../layout/AccordionGallery.vue'),
  MagicFrame: () => import('../layout/MagicFrame.vue'),
  AvatarCard: () => import('../layout/ScreenCard.vue'),
  ChatWindow: () => import('../layout/TextInput.vue'),
  DisplayController: () => import('../layout/RemoteControl.vue'),
  ToyController
  AssetManager

  //content
  RandomMessage: () => import('../views/SplashMessage.vue'),
  RandomImage: () => import('../views/SplashRandom.vue'),

  //Managers
  AssetManager: () => import('../views/VueViewer.vue'),
  SpeechKitt: () => import('../components/annyang/SpeechKitt.vue'),

  //Interactibles
  MagicScreen: () => import('../layout/MagicScreen.vue'),
  ButterflyPage: () => import('../components/butterfly/NewButterfly.vue'),

  //Screen Effects
  RainEffect: () => import('../components/zoo/RainEffect.vue'),
  LavaLamp: () => import('../components/lava/LavaLamp.vue'),
  SoapBubbles: () => import('../components/zoo/SoapBubbles.vue'),

  //Not Working
  ZooPage: () => import('../components/zoo/ZooPage.vue'),
  CannonGame: () => import('../components/cannon/TwoPlayerGame.vue'),
  ChromaChameleon: () => import('../components/zoo/ChromaChameleon.vue'),
  FlockingBirds: () => import('../components/zoo/FlockingBirds.vue'),
  GraphPaper: () => import('../components/zoo/GraphPaper.vue'),

  //Undeveloped but need
  //
};

export const defaultActiveRoutes = Object.entries(components).map(
  ([name, component]) => ({
    name,
    component,
  })
);

//Web Framework
export const HomePage = components.HomePage;
export const ErrorPage = components.ErrorNotFound;
export const UnderConstruction = components.UnderConstruction;
export const MessageHistory = components.VueViewer;

//Web Pieces
export const TitleBar = components.TitleBar;
export const AccordionGallery = components.AccordionGallery;
export const NavigationMenu = components.NavigationMenu;
export const MagicFrame = components.MagicFrame;
export const AvatarCard = components.MagicCard;

//Content
export const RandomMessage = components.SplashMessage;
export const RandomImage = components.SplashRandom;

//Social
export const UserManager = components.TextInput;
export const ChatManager = components.TextInput;

//Managers
export const ContentManager = components.SpeechKitt;
export const CSSManager = components.TextInput;
export const CommunicationManager = components.TextInput;
export const AudioManager = components.SpeechKitt;

export const DisplayManager = components.RemoteControl;

//Designers
export const BotDesigner = components.LavaLamp;
export const PromptDesigner = components.TextInput;
export const ProjectDesigner = components.VueViewer;
export const ArtDesigner = components.VueViewer;
