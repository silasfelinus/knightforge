import { ref, computed } from 'vue';

export function useButterflyPosition(
  butterflyState: { value: string },
  speed: { value: number },
  direction: { value: number }
) {
  const x = ref(0);
  const y = ref(0);

  const dx = computed(() => speed.value * Math.cos(direction.value));
  const dy = computed(() => speed.value * Math.sin(direction.value));

  function updatePosition() {
    if (butterflyState.value === 'feeding') {
      x.value += (window.innerWidth / 2 - x.value) * 0.1;
      y.value += (window.innerHeight / 2 - y.value) * 0.1;
    } else {
      x.value += dx.value;
      y.value += dy.value;

      if (x.value < 0 || x.value > window.innerWidth - 100) {
        x.value = x.value < 0 ? 0 : window.innerWidth - 100;
      }

      if (y.value < 0 || y.value > window.innerHeight - 100) {
        y.value = y.value < 0 ? 0 : window.innerHeight - 100;
      }
    }
  }

  return {
    x,
    y,
    updatePosition,
  };
}
