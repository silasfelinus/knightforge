<template>
  <div class="butterfly-swarm">
    <RainbowButterfly
      v-for="butterfly in butterflies"
      :key="butterfly.id"
      :butterflyId="butterfly.id"
      :color="butterfly.color"
      :x="butterfly.x"
      :y="butterfly.y"
      @butterflyLanded="handleButterflyLanded"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import RainbowButterfly from './RainbowButterfly.vue';

export default defineComponent({
  name: 'ButterflySwarm',
  components: {
    RainbowButterfly,
  },
  setup() {
    const butterflies = ref([{ id: '1', color: 'red', x: 100, y: 100 }]);

    const addButterfly = (butterfly) => {
      butterflies.value.push(butterfly);
    };

    const removeButterfly = (butterflyId) => {
      butterflies.value = butterflies.value.filter(
        (butterfly) => butterfly.id !== butterflyId
      );
    };

    const handleButterflyLanded = () => {
      // Implement logic when a butterfly lands on a screen
    };

    return {
      butterflies,
      addButterfly,
      removeButterfly,
      handleButterflyLanded,
    };
  },
});
</script>
