<template>
  <div class="butterfly-swarm">
    <MagicScreen />
    <RainbowButterfly
      v-for="butterfly in butterflies"
      :key="butterfly.id"
      :butterflyId="butterfly.id"
      :color="butterfly.color"
      :x="butterfly.x"
      :y="butterfly.y"
      @butterflyLanded="handleButterflyLanded"
      @butterflyClicked="onButterflyClicked"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import MagicScreen from '../layout/MagicScreen.vue';
import RainbowButterfly from './RainbowButterfly.vue';

interface Butterfly {
  id: string;
  color: string;
  x: number;
  y: number;
}

export default defineComponent({
  name: 'ButterflySwarm',
  components: {
    MagicScreen,
    RainbowButterfly,
  },
  setup(_, { emit }) {
    const butterflies = ref<Butterfly[]>([
      { id: '1', color: 'red', x: 100, y: 100 },
    ]);

    const addButterfly = (butterfly: Butterfly) => {
      butterflies.value.push(butterfly);
    };

    const removeButterfly = (butterflyId: string) => {
      butterflies.value = butterflies.value.filter(
        (butterfly) => butterfly.id !== butterflyId
      );
    };

    const handleButterflyLanded = () => {
      // Implement logic when a butterfly lands on a screen
    };

    const onButterflyClicked = (butterflyId: string) => {
      emit('butterflyClicked', butterflyId);
    };

    const moveButterflies = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      butterflies.value = butterflies.value.map((butterfly) => {
        const newX = Math.max(
          0,
          Math.min(
            screenWidth,
            butterfly.x + Math.floor(Math.random() * 21) - 10
          )
        );
        const newY = Math.max(
          0,
          Math.min(
            screenHeight,
            butterfly.y + Math.floor(Math.random() * 21) - 10
          )
        );

        return {
          ...butterfly,
          x: newX,
          y: newY,
        };
      });
    };

    setInterval(moveButterflies, 1000);

    return {
      butterflies,
      addButterfly,
      removeButterfly,
      handleButterflyLanded,
      onButterflyClicked,
    };
  },
});
</script>
