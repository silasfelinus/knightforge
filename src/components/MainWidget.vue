<template>
  <transition name="slide-down">
    <div class="main-widget" @click="nextImage">
      <q-img
        class="splash-screen cover"
        :src="currentSplashImage"
        :alt="currentCaption"
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
let currentIndex = 0;

function getImages(folder) {
  const images = [];
  for (let i = 0; i < 10; i++) {
    const filename = `${folder}${String(i).padStart(2, '0')}.png`;
    images.push({
      path: `/images/${folder}/${filename}`,
      caption: filename,
    });
  }
  return images;
}

function getRandomImage(folder) {
  const images = getImages(folder);
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

function preloadImages() {
  const { path, caption } = getRandomImage('splash');
  currentSplashImage.value = path;
  currentCaption.value = caption;
  currentIndex = parseInt(caption.slice(-6, -4));
}

function nextImage() {
  const images = getImages(splashFolders[currentFolderIndex]);
  currentIndex = (currentIndex + 1) % images.length;
  currentSplashImage.value = images[currentIndex].path;
  currentCaption.value = images[currentIndex].caption;
}

function changeFolder() {
  currentFolderIndex = (currentFolderIndex + 1) % splashFolders.length;
  currentIndex = 0;
  nextImage();
}

function handleKeydown(event) {
  if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
    changeFolder();
  } else if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    nextImage();
  }
}

onMounted(() => {
  preloadImages();
  document.addEventListener('keydown', handleKeydown);
});
</script>

<style scoped lang="scss">
.main-widget {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.splash-screen {
  max-width: 100%;
  max-height: 100%;
  height: auto;
  width: auto;
  object-fit: contain;
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
