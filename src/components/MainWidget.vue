<template>
  <transition name="slide-down">
    <div class="main-widget" @click="nextImage">
      <q-img
        class="splash-screen"
        :src="currentSplashImage"
        :alt="currentCaption"
        :ratio="16 / 9"
      >
        <div class="caption">{{ currentCaption }}</div>
      </q-img>
    </div>
  </transition>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { QImg } from 'quasar';

const splashFolders = ['splash', 'secret'];
let currentFolderIndex = 0;

const currentSplashImage = ref('');
const currentCaption = ref('');

async function getImages(folder) {
  const imagesContext = require.context(
    '../public/images/',
    true,
    /\.(png|jpe?g)$/
  );
  const images = imagesContext
    .keys()
    .filter((key) => key.startsWith(`./${folder}`));
  return images.map((key) => ({
    path: `/images${key.slice(1)}`,
    caption: key.split('/').pop(),
  }));
}

async function getRandomImage(folder) {
  const images = await getImages(folder);
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

async function preloadImages() {
  const { path, caption } = await getRandomImage('splash');
  currentSplashImage.value = path;
  currentCaption.value = caption;
}

async function nextImage() {
  const { path, caption } = await getRandomImage(
    splashFolders[currentFolderIndex]
  );
  currentSplashImage.value = path;
  currentCaption.value = caption;
}

function changeFolder() {
  currentFolderIndex = (currentFolderIndex + 1) % splashFolders.length;
  if (currentFolderIndex === 1) {
    nextImage();
  }
}

function handleKeydown(event) {
  if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
    nextImage();
  } else if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    changeFolder();
  }
}

onMounted(() => {
  preloadImages();
  document.addEventListener('keydown', handleKeydown);
});
</script>

<style scoped lang="scss">
.main-widget {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.splash-screen {
  max-width: 100%;
  max-height: 100%;
  position: relative;
}

.caption {
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: white;
  font-size: 1.2em;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.5s ease;
}

.slide-down-enter,
.slide-down-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
