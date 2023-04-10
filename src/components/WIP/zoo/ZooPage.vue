<template>
  <div class="zoo-page">
    <FlockingBirds />
    <Chameleon />
    <Fish />
    <SoapBubbles />
    <!-- Add other animal components here -->

    <!-- Weather and background effect components can be added here -->
  </div>
</template>

<script lang="ts">
import FlockingBirds from './FlockingBirds.vue';
import Chameleon from './ChromaChameleon.vue';
import Fish from './GenericFish.vue';
import SoapBubbles from './SoapBubbles.vue';

export default {
  components: {
    FlockingBirds,
    Chameleon,
    Fish,
    SoapBubbles,
  },
};
</script>

<style scoped>
.zoo-page {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
