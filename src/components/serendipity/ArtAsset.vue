<!-- ArtAsset.vue -->
<template>
  <div class="art-asset">
    <div
      class="image-side"
      :style="{ backgroundImage: `url(${imageSrc})` }"
    ></div>
    <div class="color-side" :style="{ backgroundColor: randomColor }"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRandomColor } from '@/composables/useRandomColor';

const imageSrc = ref('');

const { randomColor } = useRandomColor();
</script>

<style scoped>
.art-asset {
  width: 100px;
  height: 100px;
  display: flex;
  perspective: 1000px;
}

.image-side,
.color-side {
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  position: absolute;
}

.image-side {
  background-size: cover;
  background-position: center;
  transform: rotateY(180deg);
}

.color-side {
  transform: rotateY(0deg);
}
</style>
