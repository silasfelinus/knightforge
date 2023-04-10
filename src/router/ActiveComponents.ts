// src/router/ActiveComponents.ts

//ActiveComponents lazy loads all components
//and assigns default component status to prefered components

const components = {
  // Website Framework
  HomePage: () => import('../layout/HomePage.vue'), //Home
  ErrorPage: () => import('../views/ErrorNotFound.vue'), //404
  ConstructionPage: () => import('../views/UnderConstruction.vue'), //Under Construction
  TitleBar: () => import('../views/TitleBar.vue'), //stylized title
  NavigationMenu: () => import('../views/NavigationMenu.vue'), //isActive components
  MagicFrame: () => import('../layout/MagicFrame.vue'), //resizeable and draggable stylized window frame
  GameScreen: () => import('../layout/MagicScreen.vue'), //modular screen display interface
  ChatWindow: () => import('../layout/ChatWindow.vue'), // Chatroom message display
  MessageViewer: () => import('../views/SplashMessage.vue'), //Text Viewer
  ImageViewer: () => import('../views/SplashRandom.vue'), // Image viewer
  VoiceControl: () => import('../components/annyang/SpeechKitt.vue'), //basic voice pickup and text output
  MagicRemote: () => import('../layout/RemoteControl.vue'), //modular interface controller
  UserSettings: () => import('../componens/UserSettings.vue'), //MagicRemote for website CSS

  //wildcard randomizers
  RandomText: () => import('../views/Randomtext.vue'), //RandomText(parameters)
  RandomImage: () => import('../views/RandomImage.vue'), // RandomImage(parameters)

  //Asset Managers/Designers
  AssetManager: () => import('../views/VueViewer.vue'), // General Asset manager
  EffectsManager: () => import('../views/VueViewer.vue'), // AssetManager customized for background screen effects
  ToyboxManager: () => import('../views/VueViewer.vue'), // EffectsManager customized for user interactions
  WeatherManager: () => import('../views/VueViewer.vue'), // EffectsManager to influence other Effects
  ArtManager: () => import('../views/VueViewer.vue'), // AssetManager customized for images
  GameManager: () => import('../views/VueViewer.vue'), // AssetManager customized for gamescreen games
  PromptDesigner: () => import('../layout/TextInput.vue'), //AssetManager customized for text management
  ProjectManager: () => import('../layout/TextInput.vue'), //AssetManager customized for project planning
  CardDesigner: () => import('../layout/TextInput.vue'), //AssetManager customized for interface design
  CodeDesigner: () => import('../layout/TextInput.vue'), //AssetManager customized for code design
  ApiManager: () => import('../layout/TextInput.vue'), //AssetManager customized for Api interactions

  //AvatarCards
  AvatarCard: () => import('../layout/ScreenCard.vue'), //gui user displaycard
  RobotCard: () => import('../layout/ScreenCard.vue'), //AvatarCard with API Implementation
  ChatGPTCard: () => import('../layout/ScreenCard.vue'), //RobotCard with ChatGPT Implementation
  PromptCard: () => import('../layout/ScreenCard.vue'), //ChatGPTCard with PromptDesigner implementation
  ArtistCard: () => import('../layout/ScreenCard.vue'), //AvatarCard for Stable Diffusion Implementation
  UserCard: () => import('../layout/ScreenCard.vue'), //AvatarCard for custom user avatar

  //Gamescreens
  MinimalPanel: () => import('../layout/AdventurePanel.vue'), //Gamescreen panel with minimal interface and layer management
  ChatPanel: () => import('../layout/AdventurePanel.vue'), //Gamescreen interface panel for openai chat
  ArtPanel: () => import('../layout/AdventurePanel.vue'), //Gamescreen interface panel for Stable Diffusion Art Generation
  AdventurePanel: () => import('../layout/AdventurePanel.vue'), //Gamescreen interface panel for text adventures
  CosmosGame: () => import('../layout/AdventurManager.vue'), //AdventurePanel with PromptCard implementation
  SerendipityGame: () => import('../layout/AdventurManager.vue'), //CosmosGame with TaskManagement implementation

  //Gallery and Giftshop
  ArtGallery: () => import('../layout/AccordionGallery.vue'), //customizable Art Asset gallery viewer
  GiftShop: () => import('../layout/AccordionGallery.vue'), //Art Gallery with POD integration
  MembershipClub: () => import('../layout/AccordionGallery.vue'), //subscription portal
  ShoppingCart: () => import('../layout/AccordionGallery.vue'), //shopping cart

  //Screen Effects
  RainEffect: () => import('../components/zoo/RainEffect.vue'), //background screen effect
  LavaLampEffect: () => import('../components/lava/LavaLamp.vue'), //background screen effect
  SoapBubbleEffect: () => import('../components/zoo/SoapBubbles.vue'), //background screen effect
  ToyboxButterfly: () => import('../components/butterfly/NewButterfly.vue'), //website mascot interactible

};

export const defaultActiveRoutes = Object.entries(components).map(
  ([name, component]) => ({
    name,
    component,
  })
);
