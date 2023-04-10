// src/router/ActiveComponents.ts

//ActiveComponents lazy loads all components
//and assigns default component status to prefered components

const components = {
  // Website Layout
  HomePage: () => import('../layout/HomePage.vue'), //Home
  ErrorScreen: () => import('../layout/ErrorScreen.vue'), //404
  UnderConstruction: () => import('../layout/UnderConstruction.vue'), //Under Construction
  TitleBar: () => import('../layout/TitleBar.vue'), //stylized title
  NavigationMenu: () => import('../router/NavigationMenu.vue'), //isActive components
  AccordionGallery: () => import('../layout/AccordionGallery.vue'), //website configuration
  ChatInterface: () => import('../layout/ChatInterface.vue'), // Chatroom Interface
  VoiceControl: () => import('../layout/VoiceControl.vue'), //basic voice pickup and text output
  UserLogin: () => import('../layout/UserLogin.vue'), //User Login
  SettingsPanel: () => import('../layout/SettingsPanel.vue'), //User Settings
  RandomText: () => import('../layout/RandomMessage.vue'), //RandomText(parameters)
  RandomImage: () => import('../layout/RandomImage.vue'), // RandomImage(parameters)
  TextInput: () => import('../layout/TextInput.vue'), // Text Input Window

  //AssetManager
  AssetManager: () => import('../components/manage/AssetManager.vue'), // Asset manager
  EffectsManager: () => import('../components/manage/EffectsManager.vue'), // AssetManager customized for background screen effects
  ToyboxManager: () => import('../components/manage/ToyboxManager.vue'), // EffectsManager customized for user interactions
  ArtManager: () => import('../components/manage/ArtManager.vue'), // AssetManager customized for images
  GameManager: () => import('../components/manage/GameManager.vue'), // AssetManager customized for gamescreen games
  PromptDesigner: () => import('../components/manage/PromptDesigner.vue'), //AssetManager customized for text management
  ProjectManager: () => import('../components/manage/ProjectManager.vue'), //AssetManager customized for project planning
  CardDesigner: () => import('../components/manage/CardDesigner.vue'), //AssetManager customized for interface design
  CodeDesigner: () => import('../components/manage/CodeDesigner.vue'), //AssetManager customized for code design
  ApiManager: () => import('../components/manage/ApiManager.vue'), //AssetManager customized for Api interactions
  SiteDesigner: () => import('../components/manage/SiteDesigner.vue'), //AssetManager customized for website design
  GalleryDesigner: () => import('../components/manage/GalleryDesigner.vue'), //SiteDesigner customized for art gallery design
  TaskManager: () => import('../components/manage/TaskManager.vue'), //SiteDesigner customized for task management lists

  //CodeCards
  CodeCard: () => import('../components/cards/CodeCard.vue'), // Base class for customizable cards
  AvatarCard: () => import('../components/cards/AvatarCard.vue'), // Avatar CodeCard
  UserCard: () => import('../components/cards/UserCard.vue'), //AvatarCard for custom user avatar
  RobotCard: () => import('../components/cards/RobotCard.vue'), //AvatarCard with API Implementation
  ChatGPTCard: () => import('../components/cards/ChatGPTCard.vue'), //RobotCard with ChatGPT Implementation
  PromptCard: () => import('../components/cards/PromptCard.vue'), //ChatGPTCard with PromptDesigner implementation
  ArtistCard: () => import('../components/cards/ArtistCard.vue'), //AvatarCard for Stable Diffusion Modeller Implementation
  ArtCard: () => import('../components/cards/ArtCard.vue'), //CodeCard for Art Assets
  AlexaCard: () => import('../components/cards/AlexaCard.vue'), //RobotCard with Alexa implementation

  //ScreenFX
  MagicRemote: () => import('../components/screenfx/MagicRemote.vue'), //modular interface controller
  RainDrops: () => import('../components/screenfx/RainEffect.vue'), //background screen effect
  LavaLamp: () => import('../components/screenfx/LavaLamp.vue'), //background screen effect
  SoapBubbles: () => import('../components/screenfx/SoapBubbles.vue'), //background screen effect
  SplashImage: () => import('../components/screenfx/SplashImage.vue'), //background screen effect
  ButterflyMascot: () => import('../components/screenfx/ButterflyMascot.vue'), //website mascot interactible
  MagicFrame: () => import('../components/screenfx/MagicFrame.vue'), //resizeable and draggable stylized window frame

  //Gamescreen
  GameScreen: () => import('../components/game/GameScreen.vue'), //modular screen display interface with step-based save system
  MiniPlanet: () => import('../components/game/MiniPlanet.vue'), //Gamescreen panel with clickable interface and layer management
  ChatBot: () => import('../components/game/ChatBot.vue'), //Gamescreen interface panel for openai chat
  ArtAcademy: () => import('../components/game/ArtAcademy.vue'), //Gamescreen interface panel for Stable Diffusion Art Generation
  AdventurePanel: () => import('../components/game/AdventurePanel.vue'), //Gamescreen interface panel for text adventures
  CosmosGame: () => import('../components/game/CosmosGame.vue'), //AdventurePanel with PromptCard implementation
  SerendipityGame: () => import('../components/game/SerendipityGame.vue'), //CosmosGame with TaskManagement implementation

  //ArtGallery
  ArtGallery: () => import('../components/gallery/ArtGallery.vue'), //customizable Art Asset gallery viewer
  GiftShop: () => import('../components/gallery/GiftShop.vue'), //Art Gallery with POD integration
  MembershipClub: () => import('../components/gallery/MembershipClub.vue'), //subscription portal
  ShoppingCart: () => import('../components/gallery/ShoppingCart.vue'), //shopping cart
};

export const defaultActiveRoutes = Object.entries(components).map(
  ([name, component]) => ({
    name,
    component,
  })
);
