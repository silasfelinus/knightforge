<template>
  <div class="splash-screen">
    <img :src="randomImage" alt="Splash Screen" />
  </div>
</template>

<script>
import secretImages from '@/assets/splash/secretImages.json';
import splashImages from '@/assets/splash/splashImages.json';

// Import all images from the assets/splash directory
const splashImagesImport = import.meta.globEager('@/assets/splash/*.png');
const imageList = Object.values(splashImagesImport).map((img) => img.default);

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
      const allImages = [...secretImages, ...splashImages].map((imgName) => {
        // Find the corresponding image module in the imported image list
        return imageList.find((img) => img.includes(imgName));
      });
      const randomIndex = Math.floor(Math.random() * allImages.length);
      this.randomImage = allImages[randomIndex];
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
