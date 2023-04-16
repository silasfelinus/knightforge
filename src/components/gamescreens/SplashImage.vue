<template>
  <div class="splash-images-container">
    <div
      v-for="(interval, index) in intervals"
      :key="index"
      class="splash-image"
    >
      <img :src="randomImageUrls[index]" alt="Splash image" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  setup() {
    const intervals = [50, 70, 130, 230];
    const randomImageUrls = ref<string[]>([]);

    const getRandomImageUrl = async (index: number) => {
      const images = Object.entries(
        import.meta.glob('/src/assets/images/splash/*.webp')
      );

      const randomIndex = Math.floor(Math.random() * images.length);
      const [, importImage] = images[randomIndex];

      const module = await importImage();
      randomImageUrls.value[index] = module.default;
    };

    const refreshImages = () => {
      intervals.forEach((interval, index) => {
        setTimeout(() => {
          getRandomImageUrl(index);
          refreshImages();
        }, interval * 1000);
      });
    };

    onMounted(() => {
      intervals.forEach(() => randomImageUrls.value.push(''));
      refreshImages();
    });

    return { randomImageUrls, intervals };
  },
});
</script>

<style scoped>
.splash-images-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.splash-image {
  flex: 1;
}

.splash-image img {
  width: 100%;
  max-width: 100%;
  height: auto;
}
</style>
