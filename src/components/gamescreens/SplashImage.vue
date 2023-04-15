<template>
  <div class="splash-page">
    <img :src="randomImage" alt="Splash Image" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  name: 'SplashImage',
  setup() {
    const randomImage = ref('');

    onMounted(async () => {
      const response = await fetch('/src/assets/splash/splashImages.json');
      const images = await response.json();
      const randomIndex = Math.floor(Math.random() * images.length);
      randomImage.value = `/src/assets/splash/${images[randomIndex]}`;
    });

    return {
      randomImage,
    };
  },
});
</script>

<style scoped>
.splash-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
