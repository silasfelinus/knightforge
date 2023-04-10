<template>
  <div class="art-gallery">
    <h2>Art Gallery</h2>
    <div class="gallery-grid">
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image.src"
        :alt="image.alt"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ArtGallery',
  data() {
    return {
      images: [
        { src: '@/assets/images/splash05-WEBREADY.webp', alt: 'Image 1' },
        { src: '@/assets/images/splash08-WEBREADY.webp', alt: 'Image 2' },
        // Add more images here
      ],
    };
  },
});
</script>

<style scoped>
.art-gallery {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;
}

img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>
