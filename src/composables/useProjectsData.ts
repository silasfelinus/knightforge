import { ref } from 'vue';

export interface ProjectInfo {
  title: string;
  blurb: string;
  tags: string[];
  description: string;
  galleryFolder: string;
}

interface GlobalInfo {
  creatorName: string;
}

interface ProjectsData {
  global: GlobalInfo;
  projects: ProjectInfo[];
}

export function useProjectsData() {
  const projectsData = ref<ProjectsData | null>(null);
  const serverAddress = 'http://localhost:3000';

  async function getProjectsData() {
    try {
      const response = await fetch(`${serverAddress}/projects.json`);

      if (!response.ok) {
        console.error(await response.text());
        return;
      }

      const data = await response.json();
      projectsData.value = data;
    } catch (error) {
      console.error('Error fetching projects data:', error);
    }
  }

  function getProjectTitles(): string[] {
    if (projectsData.value) {
      return projectsData.value.projects.map((project) => project.title);
    }
    return [];
  }

  return {
    projectsData,
    getProjectsData,
    getProjectTitles,
  };
}
