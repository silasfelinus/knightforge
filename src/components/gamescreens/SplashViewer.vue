<template>
  <div class="splash-image">
    <transition :duration="5000" appear name="slide-left">
      <img :key="imageKey" :src="randomImageUrl" alt="Splash image" />
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted, watchEffect } from 'vue';

type ImageListType = { [key: string]: { default: string } };

export default defineComponent({
  setup() {
    const randomImageUrl = ref('');
    const imageKey = ref(0);
    const initialTimeout = 5000;
    const refreshInterval = 20000;
    let imagesList: ImageListType = {};

    const getRandomImageUrl = () => {
      const imageNames = Object.keys(imagesList);
      const randomIndex = Math.floor(Math.random() * imageNames.length);
      const imageModule = imagesList[imageNames[randomIndex]];
      randomImageUrl.value = imageModule.default;
      imageKey.value++;
    };

    const loadImages = async () => {
      try {
        const images = import.meta.glob('@/assets/images/splash/*.webp');
        const imageModules = await Promise.all(
          Object.values(images).map((importImage) => importImage())
        );

        imagesList = imageModules.reduce((list, module, index) => {
          list[Object.keys(images)[index]] = module;
          return list;
        }, {});
      } catch (error) {
        console.error('Error while importing image:', error);
      }

      getRandomImageUrl();
    };

    onMounted(() => {
      loadImages();
    });

    watchEffect(() => {
      const timer = setTimeout(() => {
        getRandomImageUrl();
        clearInterval(timer);
      }, initialTimeout);

      const interval = setInterval(getRandomImageUrl, refreshInterval);
      onUnmounted(() => clearInterval(interval));
    });

    return { randomImageUrl, imageKey };
  },
});
</script>

<style scoped>
.splash-image {
  position: relative;
  overflow: hidden;
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 1s;
}

.slide-left-enter-from,
.slide-left-leave-to {
  transform: translateX(100%);
}
</style>
