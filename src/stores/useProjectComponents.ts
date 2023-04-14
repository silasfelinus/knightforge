// src/stores/useProjectComponents.ts

// Define the Project interface, which represents the structure of a single project
export interface Project {
  id: string;
  isActive?: boolean;
  icon?: string;
  // An array of component names as strings
  componentStrings: string[];
}

// Create and export array of all projects and their componentStrings
const allProjects: Project[] = [
  {
    id: 'layout',
    isActive: true,
    componentStrings: [
      'ForgePage',
      'DataManager',
      'ErrorScreen',
      'HomePage2',
      'RecordManagement',
      'UnderConstruction',
      'TitleBar',
      'TestComponent',
      'NavigationMenu',
      'AccordionGallery',
      'RandomText',
      'RandomImage',
      'TextInput',
      'ChatInterface',
      'VoiceControl',
      'UserLogin',
      'SettingsPanel',
    ],
  },
  {
    id: 'screenfx',
    isActive: true,
    componentStrings: [
      'MagicRemote',
      'ButterflyMascot',
      'LavaBubble',
      'LavaLamp',
      'MagicFrame',
      'RainEffect',
      'SoapBubbles',
      'SplashImage',
    ],
  },
  {
    id: 'artgallery',
    isActive: false,
    componentStrings: [
      'ArtGallery',
      'GiftShop',
      'MembershipClub',
      'ShoppingCart',
    ],
  },
  {
    id: 'assetmanager',
    isActive: false,
    componentStrings: [
      'AssetManager',
      'EffectsManager',
      'ToyboxManager',
      'ArtManager',
      'GameManager',
      'PromptDesigner',
      'ProjectManager',
      'CardDesigner',
      'CodeDesigner',
      'ApiManager',
      'SiteDesigner',
      'GalleryDesigner',
      'TaskManager',
    ],
  },
  {
    id: 'codecards',
    isActive: false,
    componentStrings: [
      'CodeCard',
      'AvatarCard',
      'UserCard',
      'RobotCard',
      'ChatGPTCard',
      'PromptCard',
      'ArtistCard',
      'ArtCard',
      'AlexaCard',
    ],
  },
  {
    id: 'gamescreen',
    isActive: false,
    componentStrings: [
      'GameScreen',
      'MiniPlanet',
      'ChatBot',
      'ArtAcademy',
      'AdventurePanel',
      'CosmosGame',
      'SerendipityGame',
    ],
  },
];

// Returns all projects
export function getAllProjects(): Project[] {
  return allProjects;
}

// Returns active projects
export function getActiveProjects(): Project[] {
  return allProjects.filter((project) => project.isActive);
}

// Returns an array of component strings from all projects
export function getAllComponents(): string[] {
  return allProjects.reduce<string[]>(
    (acc, project) => [...acc, ...project.componentStrings],
    []
  );
}

// Returns an array of component strings from all active projects
export function getActiveComponents(): string[] {
  return allProjects
    .filter((project) => project.isActive)
    .reduce<string[]>(
      (acc, project) => [...acc, ...project.componentStrings],
      []
    );
}
