import { load } from 'js-yaml';

interface ProjectInfo {
  projectName: string;
  artist: string;
  artistUsername: string;
  colorScheme: {
    primary: string;
    secondary: string;
    accent: string;
  };
  pageSections: Array<{
    name: string;
    description?: string;
    title?: string;
    imageLinks?: string[];
  }>;
}

export function parseYaml(yamlString: string): ProjectInfo | null {
  try {
    const parsedData = load(yamlString) as ProjectInfo;
    return parsedData;
  } catch (error) {
    console.error('Error parsing YAML:', error);
    return null;
  }
}
