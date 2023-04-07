<template>
  <full-page-wrapper>
    <magic-screen></magic-screen>
    <butterfly-swarm></butterfly-swarm>
  </full-page-wrapper>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MagicScreen from '../layout/MagicScreen.vue';
import FullPageWrapper from '../layout/FullPageWrapper.vue';
import ButterflySwarm from './ButterflySwarm.vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    MagicScreen,
    FullPageWrapper,
    ButterflySwarm,
  },
});
</script>

<style lang="scss">
.div {
  background: $primary;
}
</style>
