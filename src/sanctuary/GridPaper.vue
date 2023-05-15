<template>
  <div class="room-container">
    <div class="room"></div>
  </div>
</template>

<script setup lang="ts">
// Future script for adding more interactivity will go here
</script>

<style scoped>
.room-container {
  perspective: 1200px;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.room {
  width: 300px;
  height: 300px;
  position: relative;
  transform-style: preserve-3d;
}

.room::before,
.room::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
}

.room::before {
  transform: rotateX(90deg) translateZ(-150px);
}

.room::after {
  transform: rotateY(90deg) translateZ(-150px);
}
</style>
