<template>
  <div>
    <ButterflySingle
      v-for="(butterfly, index) in butterflies"
      :key="index"
      :x="butterfly.x"
      :y="butterfly.y"
    />
    <div class="buttons">
      <button class="icon-button" @click="addButterfly">
        <font-awesome-icon icon="plus-circle" size="2x" />
      </button>
      <button class="icon-button" @click="removeButterfly">
        <font-awesome-icon icon="minus-circle" size="2x" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ButterflySingle from './ButterflySingle.vue';

const butterflies = ref([
  { x: 100, y: 100 },
  { x: 200, y: 700 },
  { x: 400, y: 200 },
  { x: 800, y: 500 },
  { x: 500, y: 300 },
  { x: 600, y: 400 },
  { x: 650, y: 90 },
  { x: 900, y: 100 },
  { x: 100, y: 100 },
  { x: 200, y: 700 },
  { x: 400, y: 200 },
  { x: 800, y: 500 },
  { x: 500, y: 300 },
  { x: 600, y: 400 },
  { x: 650, y: 90 },
  { x: 900, y: 100 },
  // Add more initial butterflies here if desired
]);

function addButterfly() {
  butterflies.value.push({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
  });
}

function removeButterfly() {
  butterflies.value.pop();
}
</script>

<style scoped>
.buttons {
  position: fixed;
  bottom: 20px;
  right: 20px;
}

.icon-button {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  margin: 0 10px;
}
</style>
