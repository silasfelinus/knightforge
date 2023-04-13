// Data is our base operating unit for anything tracked by id
export interface Data {
  id: number;
}

// Tags are our high-level concept organization, id + name
export interface Tag extends Data {
  name: string;
}

// FilePath can be remote or local
export interface FilePath extends Data {
  filePath: string;
}

export interface Database {
  database: string;
  host: string;
  user: string;
  password: string;
}
// Image is identified by filepath
// Variables customized for NLP ai processing
export interface Image extends Data {
  fileName: string;
  filePath: string;
  tags?: Tag[];
  positivePrompt?: string;
  negativePrompt?: string;
  photoset?: string;
  modeler?: string;
  height?: number;
  width?: number;
  steps?: number;
  cfg?: number;
  sampler?: string;
  seed?: number;
}

// Modelers make images in a particular style
export interface Modeler extends Tag {
  hash?: string;
  tags?: Tag[];
  localPath?: string;
  infoUrl?: string;
  images: Image[];
}

// Photosets are themed image collections organized by physical folders
export interface Photoset extends Tag {
  src: string;
  concept?: string;
  folderName?: string;
  fullPath?: string;
  tags?: Tag[];
  images?: Image[];
  prefix: string;
}

// Gallery is a sorted collection of images organized programmatically
export interface Gallery extends Tag {
  name: string;
  tags?: Tag[];
  path?: FilePath;
  images?: Image[];
  photosets?: Photoset[];
  modelers?: Modeler[];
}

// Define the Component interface, which represents the structure of a single component in a project
export interface Component {
  projectName: string;
  componentName: string;
  fileName: string;
  isActive: boolean;
  path: string;
  alias: string;
  importPath: string;
  icon?: string;
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

export interface GameScreen {
  id: number;
  photoset?: string;
}
