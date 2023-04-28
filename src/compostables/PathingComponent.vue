<template>
  <div class="pathing-component" :style="{ background: randomColor }"></div>
</template>

<script setup lang="ts">
import { useRandomColor } from '@/composables/useRandomColor';

const randomColor = useRandomColor().randomColor;
</script>

<style scoped>
.pathing-component {
  width: 100px;
  height: 30px;
  position: absolute;
  border-radius: 4px;
}
</style>
