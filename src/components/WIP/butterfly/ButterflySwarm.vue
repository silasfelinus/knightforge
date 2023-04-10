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
      @butterflyClicked="onButterflyClicked"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import RainbowButterfly from '../NewButterfly.vue';

interface Butterfly {
  id: string;
  color: string;
  x: number;
  y: number;
  mode: string;
  targetX: number;
  targetY: number;
}

export default defineComponent({
  name: 'ButterflySwarm',
  components: {
    RainbowButterfly,
  },
  setup(_, { emit }) {
    const butterflies = ref<Butterfly[]>([
      {
        id: '1',
        color: 'red',
        x: 100,
        y: 100,
        mode: 'travel',
        targetX: 0,
        targetY: 0,
      },
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

    const generateNewTarget = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      return {
        x: Math.floor(Math.random() * (screenWidth - 50)),
        y: Math.floor(Math.random() * (screenHeight - 50)),
      };
    };

    const updateButterflyPosition = (
      butterfly: Butterfly,
      newX: number,
      newY: number
    ) => {
      return {
        ...butterfly,
        x: newX,
        y: newY,
      };
    };

    const updateButterflyModeAndTarget = (
      butterfly: Butterfly,
      mode: string,
      targetX: number,
      targetY: number
    ) => {
      return {
        ...butterfly,
        mode,
        targetX,
        targetY,
      };
    };

    const moveButterflies = () => {
      butterflies.value = butterflies.value.map((butterfly) => {
        if (butterfly.mode === 'hover') {
          return updateButterflyPosition(
            butterfly,
            butterfly.x + Math.floor(Math.random() * 21) - 10,
            butterfly.y + Math.floor(Math.random() * 21) - 10
          );
        } else {
          const travelSpeed = 5;
          const dx = butterfly.targetX - butterfly.x;
          const dy = butterfly.targetY - butterfly.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < travelSpeed) {
            const newTarget = generateNewTarget();
            return updateButterflyModeAndTarget(
              updateButterflyPosition(
                butterfly,
                butterfly.targetX,
                butterfly.targetY
              ),
              'hover',
              newTarget.x,
              newTarget.y
            );
          } else {
            return updateButterflyPosition(
              butterfly,
              butterfly.x + (dx / distance) * travelSpeed,
              butterfly.y + (dy / distance) * travelSpeed
            );
          }
        }
      });
    };

    // Initialize the target position for each butterfly
    butterflies.value = butterflies.value.map((butterfly) => {
      const newTarget = generateNewTarget();
      return updateButterflyModeAndTarget(
        butterfly,
        'travel',
        newTarget.x,
        newTarget.y
      );
    });

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
