// Base ID interface
export interface ID {
  id: string;
}

// Base Tag interface
export interface Tag {
  name: string;
}

// Component interface
export interface Component extends Tag {
  projectName: string;
  fileName: string;
  isActive: boolean;
  path: string;
  alias: string;
  importPath: string;
}

// Project interface
export interface Project extends Tag {
  isActive: boolean;
  folder: string;
  icon?: string;
  components: string[];
}

// GameScreen interface
export interface GameScreen extends Tag {
  x: string;
  y: string;
  isVisible: boolean;
  layer: string;
}

// Gallery interface
export interface Gallery extends Tag {
  filePath: string;
  format: 'json';
  images: Image[];
}

// Image interface
export interface Image extends Tag {
  photoset: string;
  fileName?: string;
  filePath: string;
  modeler?: string;
  height: number;
  width: number;
}

// Photoset interface
export interface Photoset extends Tag {
  default: 'unsorted';
  fileName?: string;
  filePath: string;
  modeler?: string;
  height: number;
  width: number;
}

// Modeler interface
export interface Modeler extends Tag {
  hash?: string;
  default: 'cafe-purr';
  fileName?: string;
  diffuserUrl?: string;
  filePath?: string;
}
