<template>
  <div class="nectar-container">
    <div
      class="nectar-background"
      :style="{ background: randomGradient }"
    ></div>
    <div
      v-for="bubble in bubbles"
      :key="bubble.id"
      class="bubble"
      :style="{
        width: bubble.size + 'px',
        height: bubble.size + 'px',
        background: bubble.color,
        left: bubble.x + 'px',
        top: bubble.y + 'px',
      }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRandomColor } from '@/composables/useRandomColor';

const randomColor = useRandomColor().randomColor;
const randomGradient = ref(
  `linear-gradient(45deg, ${randomColor.value}, ${randomColor.value})`
);

const bubbles = ref<
  Array<{
    id: number;
    size: number;
    x: number;
    y: number;
    color: string;
  }>
>([]);

function generateBubbles() {
  const bubbleCount = 8;
  const newBubbles: Array<{
    id: number;
    size: number;
    x: number;
    y: number;
    color: string;
  }> = [];

  for (let i = 0; i < bubbleCount; i++) {
    newBubbles.push({
      id: i,
      size: Math.random() * 20 + 10,
      x: Math.random() * 100,
      y: Math.random() * 100,
      color: useRandomColor().randomColor.value,
    });
  }

  bubbles.value = newBubbles;
}

onMounted(generateBubbles);
</script>

<style scoped>
.nectar-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 50%;
}

.nectar-background {
  width: 100%;
  height: 100%;
  position: absolute;
  animation: flow 10s linear infinite;
}

.bubble {
  position: absolute;
  border-radius: 50%;
  animation: undulate 5s linear infinite;
}

@keyframes flow {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(100%);
  }
}

@keyframes undulate {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10%);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
