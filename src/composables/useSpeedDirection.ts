// src/composables/useRandomSpeedDirection.ts
import { ref } from 'vue';

export function useSpeedDirection() {
  const randomSpeed = ref(0);
  const randomDirection = ref(0);

  function generateRandomSpeedDirection() {
    randomSpeed.value = Math.random() * 2 + 0.5;
    randomDirection.value = Math.random() * 2 * Math.PI;
  }

  // Call the function to generate the initial speed and direction
  generateRandomSpeedDirection();

  return {
    randomSpeed,
    randomDirection,
    generateRandomSpeedDirection,
  };
}
