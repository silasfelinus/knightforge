// Tags are our high-level concept organization
export interface Tag {
  name: string;
  description?: string;
}
//filepath can be remote or local
export interface filePath {
  filePath: string;
  type?: ['data', 'photoset', 'gallery', 'image'];
}
//Photoset extends tag with a file location
export interface Photoset extends Tag {
  path: filePath;
}
//asset is a tag with a filepath
export interface Asset extends Tag {
  filePath: filePath;
}
//collection is a group of tags
export interface Collection {
  Tags: Tag[];
}
//Gallery is a collection with a mask filter of another collection
export interface Gallery extends Collection {
  mask: Collection[];
}

// Modeler interface
export interface Modeler extends Tag {
  hash?: string;
  default: 'cafe-purr';
  fileName?: string;
  diffuserUrl?: string;
  filePath?: string;
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
