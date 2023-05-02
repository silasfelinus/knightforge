import { ref, computed } from 'vue';

export interface Project {
  title: string;
  blurb: string;
  tags: string[];
  description: string;
  galleryFolder: string;
}

export default function useProjectData() {
  const projects = ref<Project[]>([]);
  const projectTitles = computed(() =>
    projects.value.map((project) => project.title)
  );

  async function fetchProjects() {
    try {
      const response = await fetch('http://localhost:3000/project-list');
      const data = await response.json();
      projects.value = data.projects;
    } catch (error) {
      console.error('Error fetching project data:', error);
    }
  }
  function getProjectData(title: string) {
    return projects.value.find((project) => project.title === title) || null;
  }

  return {
    projects,
    projectTitles,
    fetchProjects,
    getProjectData,
  };
}
