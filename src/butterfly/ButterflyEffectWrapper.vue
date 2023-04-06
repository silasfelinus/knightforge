<!-- ButterflyEffectWrapper.vue -->
<template>
  <div v-if="showButterflyEffect">
    <ButterflyMascot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useAppStore } from '@/stores/useAppStore';
import ButterflyMascot from './ButterflyMascot.vue';

export default defineComponent({
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
});
</script>
