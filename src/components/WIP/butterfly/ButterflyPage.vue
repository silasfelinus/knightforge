<template>
  <full-page-wrapper>
    <ButterflySwarm
      ref="butterflySwarm"
      @butterflyClicked="handleButterflyClicked"
    />
    <magic-screen></magic-screen>
  </full-page-wrapper>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import FullPageWrapper from '@/components/layout/FullPageWrapper.vue';
import ButterflySwarm from './ButterflySwarm.vue';
import MagicScreen from '@/components/layout/MagicScreen.vue';

export default defineComponent({
  name: 'ButterflyPage',
  components: {
    FullPageWrapper,
    ButterflySwarm,
    MagicScreen,
  },
  setup() {
    const butterflySwarm = ref<InstanceType<typeof ButterflySwarm> | null>(
      null
    );

    function getRandomColor(): string {
      const colors = [
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'indigo',
        'violet',
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    }

    function handleButterflyClicked(): void {
      const newTarget = {
        x: Math.floor(Math.random() * window.innerWidth),
        y: Math.floor(Math.random() * window.innerHeight),
      };

      const newButterfly = {
        id: Date.now().toString(),
        color: getRandomColor(),
        x: Math.floor(Math.random() * 100),
        y: Math.floor(Math.random() * 100),
        mode: 'travel', // Add this property
        targetX: newTarget.x, // Add this property
        targetY: newTarget.y, // Add this property
      };
      if (butterflySwarm.value) {
        butterflySwarm.value.addButterfly(newButterfly);
      }
    }

    return {
      butterflySwarm,
      handleButterflyClicked,
    };
  },
});
</script>

<style lang="scss">
.div {
  background: $primary;
}
</style>
