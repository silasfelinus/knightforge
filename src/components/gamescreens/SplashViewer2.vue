<template>
  <transition name="slide-left" mode="out-in">
    <SplashImage :folderName="folderName" :key="currentImageUrl" />
  </transition>
</template>

<script lang="ts">
import SplashImage from '@/components/gamescreens/SplashImage.vue';
import { defineComponent, ref, watchEffect } from 'vue';

export default defineComponent({
  components: { SplashImage },
  props: {
    folderName: {
      type: String,
      default: 'splash',
    },
    initialTimeout: {
      type: Number,
      default: 5000,
    },
    refreshInterval: {
      type: Number,
      default: 20000,
    },
  },
  setup(props) {
    const currentImageUrl = ref('');

    const loadNewImage = () => {
      currentImageUrl.value = '';
      setTimeout(() => {
        currentImageUrl.value = Math.random().toString();
      }, 1000);
    };

    watchEffect((onInvalidate) => {
      const initialTimer = setTimeout(() => {
        loadNewImage();
        const refreshTimer = setInterval(loadNewImage, props.refreshInterval);
        onInvalidate(() => {
          clearInterval(refreshTimer);
        });
      }, props.initialTimeout);

      onInvalidate(() => {
        clearTimeout(initialTimer);
      });
    });

    return { currentImageUrl };
  },
});
</script>

<style scoped>
.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 0.5s ease;
}

.slide-left-enter,
.slide-left-leave-to {
  transform: translateX(100%);
}
</style>
