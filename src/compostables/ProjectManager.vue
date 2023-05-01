<template>
  <div class="project-management">
    <header class="header-overlay">
      <h2>Project Management</h2>
      <div class="project-selector">
        <label for="project-dropdown">Select a Project:</label>
        <select
          id="project-dropdown"
          v-model="selectedProject"
          @change="loadProject"
        >
          <option v-for="title in projectTitles" :key="title" :value="title">
            {{ title }}
          </option>
        </select>
      </div>
    </header>
    <div class="project-info-container" v-if="projectInfo">
      <hr class="separator" />
      <div class="project-info">
        <section>
          <h3>{{ projectInfo.title }}</h3>
          <p>{{ projectInfo.blurb }}</p>
        </section>
        <section>
          <h4>Tags:</h4>
          <ul>
            <li v-for="(tag, index) in projectInfo.tags" :key="index">
              {{ tag }}
            </li>
          </ul>
        </section>
        <section>
          <h4>Description:</h4>
          <p>{{ projectInfo.description }}</p>
        </section>
        <section>
          <h4>Gallery Folder:</h4>
          <p>{{ projectInfo.galleryFolder }}</p>
        </section>
        <section>
          <h4>Creator Name:</h4>
          <p>{{ projectsData?.global.creatorName }}</p>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useProjectsData, ProjectInfo } from '@/composables/useProjectsData';

const { projectsData, getProjectsData, getProjectTitles } = useProjectsData();
const projectTitles = ref<string[]>([]);
const selectedProject = ref('');
const projectInfo = ref<ProjectInfo | null>(null);

async function fetchProjects() {
  await getProjectsData();
  if (projectsData.value) {
    projectTitles.value = getProjectTitles();
    selectedProject.value = projectTitles.value[0];
    loadProject();
  }
}

function loadProject() {
  if (selectedProject.value && projectsData.value) {
    projectInfo.value =
      projectsData.value.projects.find(
        (project) => project.title === selectedProject.value
      ) ?? null;
  }
}

watch(selectedProject, () => {
  loadProject();
});

fetchProjects();
</script>
