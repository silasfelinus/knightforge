<template>
  <div class="splash-image">
    <transition :duration="5000" appear name="slide-left">
      <img :key="imageKey" :src="randomImageUrl" alt="Splash image" />
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watchEffect } from 'vue';

export default defineComponent({
  setup() {
    const randomImageUrl = ref('');
    const imageKey = ref(0); // Add a key ref for the image
    const initialTimeout = 5000; // 5 seconds
    const refreshInterval = 20000; // 10 seconds

    const getRandomImageUrl = async () => {
      try {
        const images = import.meta.glob('@/assets/images/splash/*.webp');
        const imageNames = Object.keys(images);
        const randomIndex = Math.floor(Math.random() * imageNames.length);
        const imageModule = await images[imageNames[randomIndex]]();
        randomImageUrl.value = imageModule.default || imageModule;
        imageKey.value++; // Increment the image key
      } catch (error) {
        console.error('Error while importing image:', error);
      }
    };

    onMounted(() => {
      getRandomImageUrl();
    });

    watchEffect(() => {
      const timer = setTimeout(() => {
        getRandomImageUrl();
        const interval = setInterval(getRandomImageUrl, refreshInterval);
        return () => clearInterval(interval);
      }, initialTimeout);

      return () => clearTimeout(timer);
    });

    return { randomImageUrl, imageKey };
  },
});
</script>

<style lang="scss">
.splash-image {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

.splash-image img {
  height: 100%;
  width: auto;
  object-fit: contain;
  position: absolute;
  left: 0;
}

/* Add the transition styles */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 1s;
}
.slide-left-enter,
.slide-left-leave-to {
  transform: translateX(-100vw);
}
</style>
