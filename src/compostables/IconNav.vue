<template>
  <div class="icon-nav">
    <div class="icon-container" @click="toggleNightMode">
      <i class="fas fa-lightbulb icon-night-mode"></i>
      <span class="icon-label">Night Mode</span>
    </div>
    <div class="icon-container">
      <i class="fas fa-easel icon-gallery"></i>
      <span class="icon-label">Gallery</span>
    </div>
    <div class="icon-container">
      <i class="fas fa-palette icon-make-art"></i>
      <span class="icon-label">Make Art</span>
    </div>
    <div class="icon-container">
      <i class="fas fa-comments icon-chat"></i>
      <span class="icon-label">Chat</span>
    </div>
    <div class="icon-container">
      <i class="fas fa-robot icon-robot-builder"></i>
      <span class="icon-label">Robot Builder</span>
    </div>
    <div class="icon-container">
      <i class="fas fa-butterfly icon-login"></i>
      <span class="icon-label">Login</span>
      <ButterflySolo />
    </div>
  </div>
</template>

<script lang="ts" setup>
import ButterflySolo from './ButterflySolo.vue';

const toggleNightMode = () => {
  console.log('Night mode toggled');
  // Implement night mode toggle logic here
};
</script>

<style scoped>
.icon-nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background-color: #f5f5f5;
  padding: 16px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.icon-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.icon-night-mode,
.icon-gallery,
.icon-make-art,
.icon-chat,
.icon-robot-builder,
.icon-login {
  font-size: 24px;
  margin-bottom: 8px;
}

.icon-label {
  font-size: 12px;
  color: #333;
}
</style>
