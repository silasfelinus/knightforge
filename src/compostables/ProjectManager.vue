<template>
  <div class="project-manager">
    <select v-model="selectedTitle" @change="onTitleChange">
      <option disabled value="">Select a project</option>
      <option v-for="title in projectTitles" :key="title">{{ title }}</option>
    </select>

    <div v-if="selectedProject" class="project-info">
      <splash-background :folder-name="selectedProject.gallery" />

      <div class="project-details">
        <h2>{{ selectedProject.title }}</h2>
        <p>{{ selectedProject.blurb }}</p>
        <h3>Tags</h3>
        <ul>
          <li v-for="tag in selectedProject.tags" :key="tag">{{ tag }}</li>
        </ul>
        <h3>Description</h3>
        <p>{{ selectedProject.description }}</p>
        <h3>Creator</h3>
        <p>{{ selectedProject.creator }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, Ref } from 'vue';
import useProjectData from '@/composables/useProjectData';
import SplashBackground from './SplashBackground.vue';
import { Project } from '@/types/project';

export default {
  components: {
    SplashBackground,
  },
  setup() {
    const { projectTitles, getProjectByTitle } = useProjectData();
    const selectedTitle = ref('');
    const selectedProject: Ref<Project | null> = ref(null);

    const onTitleChange = () => {
      selectedProject.value = getProjectByTitle(selectedTitle.value);
    };

    return {
      projectTitles,
      selectedTitle,
      selectedProject,
      onTitleChange,
    };
  },
};
</script>

<style scoped>
.project-manager {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.project-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.project-details {
  text-align: center;
  max-width: 600px;
}
</style>
