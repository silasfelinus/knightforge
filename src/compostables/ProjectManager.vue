<template>
  <header class="header" :class="{ collapsed: isCollapsed }">
    <h2 class="project-manager-title">Project Manager</h2>
    <ButterflyMascot />
    <select
      v-model="selectedProject"
      @change="selectProject"
      class="project-select"
    >
      <option disabled value="">Please select a project</option>
      <option v-for="title in projectTitles" :key="title" :value="title">
        {{ title }}
      </option>
    </select>
    <button class="collapse-toggle" @click="toggleHeader">
      <i class="fas fa-chevron-up" v-if="!isCollapsed"></i>
      <i class="fas fa-chevron-down" v-else></i>
    </button>
  </header>

  <div v-if="selectedProjectData" class="project-details">
    <AccordionGallery class="gallery-container" />
    <SplashBackground
      :folderName="selectedProjectData.galleryFolder"
      :key="selectedProjectData.galleryFolder"
    />
    <div id="chat-container">
      <button id="chat-toggle" @click="toggleChat">
        <i class="fas fa-comments"></i>
      </button>
      <div id="chat-popup" :class="{ visible: isChatVisible }">
        <div class="chat-message">
          <p>Hi, This Works.!!!!</p>
        </div>
        <div class="user-input">
          <input type="text" placeholder="Type your message here..." />
        </div>
      </div>
    </div>
    <div class="content-wrapper">
      <div class="semi-opaque-container"></div>
      <h3 class="project-title">{{ selectedProjectData.title }}</h3>
      <p class="project-tags">
        Tags: {{ selectedProjectData.tags.join(', ') }}
      </p>
      <p class="project-blurb">{{ selectedProjectData.blurb }}</p>
      <div class="project-description">
        <p>{{ selectedProjectData.description }}</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import useProjectData, { Project } from '@/composables/useProjectData';
import ButterflyMascot from './ButterflySolo.vue';
import SplashBackground from './SplashBackground.vue';
import AccordionGallery from './AccordionNav.vue';

const { projectTitles, fetchProjects, getProjectData } = useProjectData();

const selectedProject = ref('');
const selectedProjectData = ref<Project | null>(null);

onMounted(() => {
  fetchProjects();
});

function selectProject() {
  selectedProjectData.value = getProjectData(selectedProject.value);
}

const isCollapsed = ref(false);

function toggleHeader() {
  isCollapsed.value = !isCollapsed.value;
}
const isChatVisible = ref(true);

function toggleChat() {
  isChatVisible.value = !isChatVisible.value;
}
</script>

<style lang="scss">
@import 'src/css/quasar.variables.scss';

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $secondary;
  padding: $spacing-base;
  position: absolute;
  width: 100%;
  z-index: 1000;
  height: 60px;
  transition: height 0.3s;
}
.user-input {
  margin-top: 16px;
}

.user-input input {
  width: 100%;
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid $primary;
  outline: none;
  font-size: 1rem;
  color: $dark;
  transition: border-color 0.3s;
}

.user-input input:focus {
  border-color: $secondary;
}

.collapsed {
  height: 30px;
}

.project-manager-title {
  font-size: 1.5rem;
  color: $background;
}

.project-select {
  background-color: rgba($background, 0.5);
  border: none;
  padding: 0.5 * $spacing-base $spacing-base;
  font-size: $font-size-base;
  color: $dark;
  outline: none;
  border-radius: 4px;
  cursor: pointer;
}

#chat-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 2000;
}

#chat-toggle {
  background-color: $secondary;
  color: $background;
  border: none;
  font-size: 1.5rem;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s;
}

#chat-toggle:hover {
  background-color: darken($secondary, 10%);
}

#chat-popup {
  position: absolute;
  bottom: 80px;
  right: 0;
  background-color: $background;
  width: 300px;
  border-radius: 8px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.25);
  padding: 16px;
  display: none;
  transition: all 0.3s;
}

#chat-popup.visible {
  display: block;
}

.chat-message {
  background-color: $info;
  color: $background;
  padding: 8px 16px;
  border-radius: 20px;
  display: inline-block;
  font-weight: bold;
  font-size: 1.1rem;
}

.collapse-toggle {
  position: absolute;
  right: 10px;
  bottom: -5px;
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s;
}

.collapse-toggle:hover {
  transform: scale(1.1);
}

.fas {
  font-size: 14px;
}

.project-details {
  position: relative;
  padding: 3 * $spacing-base;
  background-color: $dark-page;
  min-height: 100vh;
}

.gallery-container {
  margin-bottom: 20px;
}

.content-wrapper {
  position: absolute;
  width: 66vw;
  left: 50%;
  top: calc(4rem + 300px);
  transform: translate(-50%, 0);
  z-index: 20;
  color: $light-text;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
}

.semi-opaque-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba($background, 0.5);
  z-index: -1;
  border-radius: 4px;
}

.project-title {
  font-size: 2.5rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.project-tags {
  font-size: 1rem;
  color: $info;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.project-blurb {
  font-size: 1.25rem;
  font-weight: 500;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.project-description {
  padding: 0 1rem;
}
</style>
