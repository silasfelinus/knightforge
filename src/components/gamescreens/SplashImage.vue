<template>
  <div class="splash-image">
    <img :src="randomImageUrl" alt="Splash image" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  setup() {
    const randomImageUrl = ref('');

    const getRandomImageUrl = async () => {
      const images = Object.entries(
        import.meta.glob('/src/assets/images/splash/*.webp')
      );

      const randomIndex = Math.floor(Math.random() * images.length);
      const [, importImage] = images[randomIndex]; // Replace '_' with ','

      const module = await importImage();
      randomImageUrl.value = module.default;
    };

    onMounted(getRandomImageUrl);

    return { randomImageUrl };
  },
});
</script>

<style scoped>
.splash-image img {
  /* Add any styles for the image here */
  width: 100%;
  max-width: 100%;
  height: auto;
}
</style>
