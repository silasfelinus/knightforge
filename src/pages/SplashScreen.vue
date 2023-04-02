<template>
  <div class="splash-screen">
    <img :src="randomImage" alt="Splash Screen" />
  </div>
</template>

<script>
import secretImages from '@/assets/splash/secretImages.json';
import splashImages from '@/assets/splash/splashImages.json';

export default {
  name: 'SplashScreen',
  data() {
    return {
      randomImage: '',
    };
  },
  created() {
    this.loadRandomImage();
  },
  methods: {
    loadRandomImage() {
      const allImages = [...secretImages, ...splashImages];
      const randomIndex = Math.floor(Math.random() * allImages.length);
      const selectedImage = allImages[randomIndex];
      this.randomImage = require('@/assets/splash/' + selectedImage);
    },
  },
};
</script>

<style scoped>
.splash-screen {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
</style>
