<!-- ButterflyEffectWrapper.vue -->
<template>
  <div v-if="showButterflyEffect">
    <ButterflyMascot />
  </div>
</template>

<script lang="ts">
import { useAppStore } from '@/stores/useAppStore';
import ButterflyMascot from './ButterflyMascot.vue';

export default {
  name: 'ButterflyEffectWrapper',
  components: {
    ButterflyMascot,
  },
  setup() {
    const appStore = useAppStore();
    const showButterflyEffect = appStore.showButterflyEffect;

    return {
      showButterflyEffect,
    };
  },
};
</script>
