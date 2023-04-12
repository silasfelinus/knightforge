// Tags are our high-level concept organization
export interface Tag {
  name: string;
  Tags?: Tag[];
}
//filepath can be remote or local
export interface filePath {
  filePath: string;
  Tags?: Tag[];
}
//image is identified by filepath
export interface Image {
  filepath: filePath;
  PrimaryTag?: Tag;
  SecondaryTags?: Tag[];
  photoset?: Photoset;
  modeler?: Modeler;
  height?: number;
  width?: number;
  steps?: number;
  cfg?: number;
  sampler?: string;
  seed?: number;
}

// Modeler interface
export interface Modeler {
  name: Tag;
  hash?: string;
  tags?: Tag[];
  filepath?: filePath;
  infoUrl?: filePath;
}

//Photosets are themed collections of images sorted by folder
export interface Photoset {
  name: string;
  path: filePath;
  tags?: Tag[];
}

//Gallery is a sorted collection of images
export interface Gallery {
  name: string;
  tags?: Tag[];
  path?: filePath;
  images: Image[];
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
