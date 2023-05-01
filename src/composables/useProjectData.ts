// useProjectData.ts
import { ref, onMounted } from 'vue';
import { Project } from '@/types/project';

interface ProjectData {
  projectTitles: string[];
  getProjectByTitle: (title: string) => Project | null;
}

export default function useProjectData(): ProjectData {
  const projects = ref<Project[]>([]);
  const projectTitles = ref<string[]>([]);
  const serverAddress = 'http://localhost:3000';

  onMounted(async () => {
    try {
      const response = await fetch(`${serverAddress}/project-list`);
      const data = await response.json();
      projects.value = data.projects;
      projectTitles.value = data.projects.map(
        (project: Project) => project.title
      );
    } catch (error) {
      console.error('Error fetching project data:', error);
    }
  });

  function getProjectByTitle(title: string): Project | null {
    const project = projects.value.find(
      (project: Project) => project.title === title
    );
    return project ? { ...project } : null;
  }

  return {
    projectTitles: projectTitles.value,
    getProjectByTitle,
  };
}
