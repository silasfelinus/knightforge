<template>
  <full-page-wrapper>
    <ButterflySwarm
      ref="butterflySwarm"
      @butterflyClicked="handleButterflyClicked"
    />
    <screen-manager> </screen-manager>
    <butterfly-manager></butterfly-manager>
    <magic-screen></magic-screen>
  </full-page-wrapper>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import FullPageWrapper from '../layout/FullPageWrapper.vue';
import ButterflySwarm from './ButterflySwarm.vue';
import ScreenManager from './ScreenManager.vue';
import ButterflyManager from './ButterflyManager.vue';
import MagicScreen from '../layout/MagicScreen.vue';

export default defineComponent({
  name: 'ButterflyPage',
  components: {
    FullPageWrapper,
    ButterflySwarm,
    ScreenManager,
    ButterflyManager,
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
      const newButterfly = {
        id: Date.now().toString(),
        color: getRandomColor(),
        x: Math.floor(Math.random() * 100),
        y: Math.floor(Math.random() * 100),
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
