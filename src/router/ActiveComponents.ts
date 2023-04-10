// src/router/ActiveComponents.ts

//ActiveComponents lazy loads all components
//and assigns default component status to prefered components

const components = {
  // Website Framework
  HomePage: () => import('../layout/HomePage.vue'), //Home
  ErrorScreen: () => import('../views/ErrorPage.vue'), //404
  ConstructionScreen: () => import('../views/ConstructionPage.vue'), //Under Construction
  TitleBar: () => import('../views/TitleBar.vue'), //stylized title
  NavigationMenu: () => import('../views/NavigationMenu.vue'), //isActive components
  SettingsPanel: () => import('../views/SettingsPanel.vue'), //website configuration

  //AssetManager
  AssetManager: () => import('../views/VueViewer.vue'), // General Asset manager
  EffectsManager: () => import('../views/VueViewer.vue'), // AssetManager customized for background screen effects
  ToyboxManager: () => import('../views/VueViewer.vue'), // EffectsManager customized for user interactions
  ArtManager: () => import('../views/VueViewer.vue'), // AssetManager customized for images
  GameManager: () => import('../views/VueViewer.vue'), // AssetManager customized for gamescreen games
  PromptDesigner: () => import('../views/TextInput.vue'), //AssetManager customized for text management
  ProjectManager: () => import('../views/TextInput.vue'), //AssetManager customized for project planning
  CardDesigner: () => import('../views/TextInput.vue'), //AssetManager customized for interface design
  CodeDesigner: () => import('../views/TextInput.vue'), //AssetManager customized for code design
  ApiManager: () => import('../views/TextInput.vue'), //AssetManager customized for Api interactions
  SiteDesigner: () => import('../views/TextInput.vue'), //AssetManager customized for website design
  GalleryDesigner: () => import('../views/TextInput.vue'), //SiteDesigner customized for art gallery design

  //Interactibles
  ChatWindow: () => import('../views/ChatWindow.vue'), // Chatroom message display
  VoiceControl: () => import('../components/annyang/SpeechKitt.vue'), //basic voice pickup and text output
  MagicRemote: () => import('../views/RemoteControl.vue'), //modular interface controller
  RainEffect: () => import('../components/zoo/RainEffect.vue'), //background screen effect
  LavaLampEffect: () => import('../components/lava/LavaLamp.vue'), //background screen effect
  SoapBubbleEffect: () => import('../components/zoo/SoapBubbles.vue'), //background screen effect
  ButterflyEffect: () => import('../components/NewButterfly.vue'), //website mascot interactible
  MagicFrame: () => import('../views/MagicFrame.vue'), //resizeable and draggable stylized window frame
  RandomText: () => import('../views/Randomtext.vue'), //RandomText(parameters)
  RandomImage: () => import('../views/RandomImage.vue'), // RandomImage(parameters)

  //CodeCards
  CodeCard: () => import('../views/ScreenCard.vue'), // Base class for customizable cards
  AvatarCard: () => import('../views/ScreenCard.vue'), // Avatar CodeCard
  UserCard: () => import('../views/ScreenCard.vue'), //AvatarCard for custom user avatar
  RobotCard: () => import('../views/ScreenCard.vue'), //AvatarCard with API Implementation
  ChatGPTCard: () => import('../views/ScreenCard.vue'), //RobotCard with ChatGPT Implementation
  PromptCard: () => import('../views/ScreenCard.vue'), //ChatGPTCard with PromptDesigner implementation
  ArtistCard: () => import('../views/ScreenCard.vue'), //AvatarCard for Stable Diffusion Implementation
  AlexaCard: () => import('../views/ScreenCard.vue'), //RobotCard with Alexa implementation

  //Gamescreen
  GameScreen: () => import('../views/MagicScreen.vue'), //modular screen display interface with step-based save system
  MinimalPanel: () => import('../layout/AdventurePanel.vue'), //Gamescreen panel with minimal interface and layer management
  ChatPanel: () => import('../layout/AdventurePanel.vue'), //Gamescreen interface panel for openai chat
  ArtPanel: () => import('../layout/AdventurePanel.vue'), //Gamescreen interface panel for Stable Diffusion Art Generation
  AdventurePanel: () => import('../layout/AdventurePanel.vue'), //Gamescreen interface panel for text adventures
  CosmosGame: () => import('../game/AdventurManager.vue'), //AdventurePanel with PromptCard implementation
  SerendipityGame: () => import('../view/AdventurManager.vue'), //CosmosGame with TaskManagement implementation

  //ArtGallery
  ArtGallery: () => import('../views/AccordionGallery.vue'), //customizable Art Asset gallery viewer
  GiftShop: () => import('../views/AccordionGallery.vue'), //Art Gallery with POD integration
  MembershipClub: () => import('../views/AccordionGallery.vue'), //subscription portal
  ShoppingCart: () => import('../views/AccordionGallery.vue'), //shopping cart
};

export const defaultActiveRoutes = Object.entries(components).map(
  ([name, component]) => ({
    name,
    component,
  })
);
