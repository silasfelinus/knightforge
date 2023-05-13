<template>
  <div
    class="butterfly-zone"
    @mousemove="updateZone"
    :style="{
      background: 'linear-gradient(' + gradientDirection + 'deg, red, yellow)',
    }"
  >
    <ButterflyGroup />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ButterflyGroup from './ButterflyGroup.vue';

const gradientDirection = ref(45);

function updateZone(event: MouseEvent) {
  gradientDirection.value = (event.clientX / window.innerWidth) * 360;
}
</script>

<style scoped>
.butterfly-zone {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
}
</style>
