// src/stores/useProjectComponents.ts

// Define the Project interface, which represents the structure of a single project
export interface Project {
  id: string;
  isActive?: boolean;
  icon?: string;
  // An array of component names as strings
  componentStrings: string[];
}

// Create array of all projects and their componentStrings
const allProjects: Project[] = [
  {
    id: 'layout',
    isActive: true,
    componentStrings: [
      'ButterflyMascot',
      'DemoPage',
      'MagicFrame',
      'MagicRemote',
      'NavigationMenu',
      'SplashMessage',
      'TitleBar',
      'UnderConstruction',
    ],
  },
  {
    id: 'gamescreens',
    isActive: true,
    componentStrings: [
      'AccordionGallery',
      'LavaBubble',
      'LavaLamp',
      'RainEffect',
      'SoapBubbles',
      'SplashImage',
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
