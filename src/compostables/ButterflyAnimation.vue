<template>
  <div class="butterfly" :style="{ left: x + 'px', top: y + 'px' }">
    <div class="left-wing">
      <div class="top" :style="{ background: wingColor }"></div>
      <div class="bottom" :style="{ background: wingColor }"></div>
    </div>
    <div class="right-wing">
      <div class="top" :style="{ background: wingColor }"></div>
      <div class="bottom" :style="{ background: wingColor }"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useRandomColor } from '@/composables/useRandomColor';
import { useSpeedDirection } from '@/composables/useSpeedDirection';
import { useButterflyState } from '@/composables/useButterflyState';
import { useButterflyPosition } from '@/composables/useButterflyPosition';

// Generate a random color for the wings
const wingColor = useRandomColor().randomColor;

// Use the speed and direction composables
const { randomSpeed, randomDirection } = useSpeedDirection();

// Use the butterfly state management composable
const { butterflyState, setButterflyState } = useButterflyState();

// Use the butterfly position management composable
const { x, y, updatePosition } = useButterflyPosition(
  butterflyState,
  randomSpeed,
  randomDirection
);

// Watch for changes in butterfly state and trigger animations accordingly
watch(butterflyState, () => {
  // Handle animations or transitions based on the newVal
});

// Animate the butterfly's movement and wings
function animate() {
  updatePosition();
  requestAnimationFrame(animate);
}

// Run setup functions after component has mounted
onMounted(() => {
  setButterflyState('flap');
  animate();
});
</script>

<style scoped>
.butterfly {
  width: 100px;
  height: 100px;
  position: absolute;
  transform-style: preserve-3d;
  transform: rotate3d(1, 0.5, 0, 110deg);
}

.left-wing,
.right-wing {
  width: 24px;
  height: 42px;
  position: absolute;
  top: 10px;
}

.left-wing {
  left: 10px;
  top: 10px;
  transform-origin: 24px 50%;
  transform: rotate3d(0, 1, 0, 20deg);
}

.right-wing {
  left: 34px;
  transform: rotate3d(0, 1, 0, -20deg);
  transform-origin: 0px 50%;
}

.left-wing .top {
  right: 0;
}

.top,
.bottom {
  opacity: 0.7;
  position: absolute;
}

.top {
  width: 20px;
  height: 20px;
  border-radius: 10px;
}

.bottom {
  top: 18px;
  width: 24px;
  height: 24px;
  border-radius: 12px;
}
</style>
