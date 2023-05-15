<template>
  <div
    class="butterfly-feeder"
    :style="{ left: props.x + 'px', top: props.y + 'px' }"
  >
    <ButterflyNectar />
  </div>
</template>

<script setup lang="ts">
import ButterflyNectar from './ButterflyNectar.vue';

const props = defineProps<{
  x: number;
  y: number;
}>();
</script>

<style scoped>
.butterfly-feeder {
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
}
</style>
