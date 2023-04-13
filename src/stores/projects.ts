// src/stores/projects.ts
import { Project } from './types';

export const projects: Project[] = [
  {
    name: 'layout',
    folder: 'layout',
    isActive: true,
    components: [
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
    name: 'screenfx',
    isActive: true,
    folder: 'screenfx',
    components: [
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
    name: 'artgallery',
    folder: 'artgallery',
    isActive: false,
    components: ['ArtGallery', 'GiftShop', 'MembershipClub', 'ShoppingCart'],
  },
  {
    name: 'assetmanager',
    isActive: false,
    folder: 'assetmanager',
    components: [
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
    name: 'codecards',
    isActive: false,
    folder: 'codecards',
    components: [
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
    name: 'gamescreen',
    isActive: false,
    folder: 'gamescreen',
    components: [
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

// Create a function that takes a project name and returns the corresponding Project object
export function getProjectByName(projectName: string): Project | undefined {
  return projects.find((project) => project.name === projectName);
}
