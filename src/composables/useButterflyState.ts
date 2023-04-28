import { ref } from 'vue';

export function useButterflyState() {
  const butterflyState = ref('flap');

  function setButterflyState(newState: string) {
    butterflyState.value = newState;
  }

  return {
    butterflyState,
    setButterflyState,
  };
}
