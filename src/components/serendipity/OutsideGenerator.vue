<template>
  <div class="outside-generator">
    <div class="ground" :style="groundStyle"></div>
    <div
      class="landscape"
      v-for="(landscape, index) in landscapes"
      :key="index"
    >
      <img
        v-if="landscape.url"
        :src="landscape.url"
        :style="landscape.style"
        alt="Landscape Element"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Ref, ref, computed, onMounted } from 'vue';
import { useRandomColor } from '@/composables/useRandomColor';
import { useRandomImage } from '@/composables/useRandomImage';

const { randomColor: randomGroundColor } = useRandomColor();
const { randomImageUrl, loadImages } = useRandomImage('background');

const groundHeight = ref(Math.floor(Math.random() * 50) + 50);
const groundStyle = computed(() => ({
  backgroundColor: randomGroundColor.value,
  height: `${groundHeight.value}px`,
}));

interface Landscape {
  url: string | null;
  style: {
    position: 'absolute';
    left: string;
    bottom: string;
    transform: string;
  };
}

const landscapes: Ref<Landscape[]> = ref([]);

const generateRandomLandscape = async () => {
  await loadImages();
  const landscapeCount = Math.floor(Math.random() * 5) + 1;
  const newLandscapes: Landscape[] = [];

  for (let i = 0; i < landscapeCount; i++) {
    const randomImage = randomImageUrl.value;
    newLandscapes.push({
      url: randomImage,
      style: {
        position: 'absolute',
        left: `${Math.floor(Math.random() * 90)}%`,
        bottom: `${Math.floor(Math.random() * groundHeight.value)}px`,
        transform: `scale(${Math.random() * 2})`,
      },
    });
  }

  landscapes.value = newLandscapes;
};

onMounted(() => {
  generateRandomLandscape();
});
</script>

<style scoped>
.outside-generator {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.ground {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}

.landscape {
  position: absolute;
}
</style>
