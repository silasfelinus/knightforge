<template>
  <div class="page-container">
    <div class="options-container">
      <button class="add-button" @click="addButterfly">Create New Butterfly</button>
    </div>
    <div class="butterflies-container">
      <div
        v-for="(butterfly, index) in butterflies"
        :key="butterfly.id"
        class="butterfly-container"
      >
        <h3 class="butterfly-title">{{ butterfly.name }}</h3>
        <butterfly-animation
          :color="butterfly.color"
          :target-position="butterfly.targetPosition"
          @updatePosition="updatePosition(butterfly.id, $event)"
        />
        <div class="settings-container">
          <label for="color">Color:</label>
          <input
            id="color"
            type="color"
            v-model="butterfly.color"
          />
          <label for="targetPosition">Target Position:</label>
          <input
            id="targetPosition"
            type="text"
            placeholder="x, y"
            @input="updateTargetPosition(butterfly.id, $event.target.value)"
          />
        </div>
        <button class="delete-button" @click="deleteButterfly(index)">
          Delete Butterfly
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import ButterflyAnimation from './ButterflyAnimation.vue';
import { useRandomName } from '@/composables/useRandomName';

const butterflies = reactive<Array<{ id: number; name: string; color: string; targetPosition: { x: number; y: number }; }>>([]);
let nextButterflyId = 0;

function addButterfly() {
  const randomName = useRandomName();
  butterflies.push({
    id: nextButterflyId,
    name: randomName.value,
    color: '',
    targetPosition: { x: 0, y: 0 },
  });
  nextButterflyId++;
}

function deleteButterfly(index: number) {
  butterflies.splice(index, 1);
}

function updatePosition(butterflyId: number, position: { x: number; y: number }) {
  const butterfly = butterflies.find(b => b.id === butterflyId);
  if (butterfly) {
    butterfly.targetPosition = position;
  }
}

function updateTargetPosition(butterflyId: number, value: string) {
  const [x, y] = value.split(',').map(Number);
  const butterfly = butterflies.find(b => b.id === butterflyId);
  if (butterfly) {
    butterfly.targetPosition = { x, y };
  }
}
</script>

<style scoped>

.settings-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
}

.options-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
  max-width: 400px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 30px;
}

.butterflies-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  max-width: 1000px;
  width: 100%;
}

.butterfly-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
  width: 200px;
  box-sizing: border-box;
}

.butterfly-title {
  font-size: 18px;
  margin-bottom: 10px;
}

.add-button {
  display: inline-block;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s;
}

.add-button:hover {
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.delete-button {
  display: inline-block;
  background-color: #ff4c4c;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s;
  margin-top: 10px;
}

.delete-button:hover {
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}
</style>
