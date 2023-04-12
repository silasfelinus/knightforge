// Define the Component interface, which represents the structure of a single component in a project
export interface Component {
  projectName: string;
  componentName: string;
  fileName: string;
  isActive: boolean;
  path: string;
  alias: string;
  importPath: string;
}

// Define the Project interface, which represents the structure of a single project
export interface Project {
  name: string;
  isActive: boolean;
  folder: string;
  icon?: string;
  // An array of component names as strings, for easy editing and information at a glance
  components: string[];
}

export type Src = string;

export interface GameScreen {
  name: string;
  x: string;
  y: string;
  isVisible: boolean;
  layer: string;
}
export interface Gallery {
  name?: string;
  user?: string;
  size?: string;
  filePath: Src;
}

export interface Image {
  galleryName?: string;
  fileName?: string;
  filePath: Src;
}
