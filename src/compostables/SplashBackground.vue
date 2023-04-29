<template>
  <div class="splash-image">
    <div
      class="frame"
      :style="{
        borderColor: borderColor,
        borderWidth: borderWidth,
        display: showFrame ? 'block' : 'none',
        maxHeight: isFullSize ? 'none' : '100vh',
      }"
    >
      <img :src="randomImageUrl" alt="Splash image" @click="changeImage" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue';
import { useRandomImage } from '../composables/useRandomImage';

const folderName = ref('splash');
const borderColor = ref('#000000');
const borderWidth = ref('2px');

const { getRandomImage } = useRandomImage(folderName);

const showFrame = ref(true);
const randomImageUrl = ref<string>('');
const isFullSize = ref(true);

const changeImage = async () => {
  let newImageUrl: string | null;
  do {
    newImageUrl = await getRandomImage();
  } while (newImageUrl === randomImageUrl.value);

  randomImageUrl.value = newImageUrl || randomImageUrl.value;
};

watch(folderName, () => {
  loadImages();
});

onMounted(() => {
  loadImages();
});

const loadImages = async () => {
  const imageUrl = await getRandomImage();
  if (imageUrl) {
    randomImageUrl.value = imageUrl;
  }
};
</script>

<style scoped>
.splash-image {
  position: relative;
}
.frame {
  border-style: solid;
  padding: 0;
  position: relative;
  overflow: hidden;
  max-width: 100%;
}
img {
  width: 100%;
  height: auto;
  display: block;
  cursor: pointer;
}
</style>
