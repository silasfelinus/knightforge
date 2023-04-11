<template>
  <div class="container">
    <splash-message></splash-message>
    <div class="gallery-wrap">
      <div
        v-for="image in splashImages"
        :key="image.id"
        :style="{ backgroundImage: `url(${image.default})` }"
        class="item"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import SplashMessage from './RandomMessage.vue';

interface ImageImport {
  default: string;
  id: number;
  alt: string;
}

const imagePaths = [
  '@/assets/images/chest001.webp',
  '@/assets/images/chest002.webp',
  '@/assets/images/chest003.webp',
  '@/assets/images/chest004.webp',
  '@/assets/images/chest005.webp',
  '@/assets/images/chest006.webp',
];

const loadImages = async (): Promise<ImageImport[]> => {
  const imageImports: ImageImport[] = await Promise.all(
    imagePaths.map((path, index) =>
      import(/* @vite-ignore */ path).then((img) => ({
        default: img.default,
        id: index + 1,
        alt:
          index < 2 ? `Splash Image 0${index}` : `Secret Image 0${index - 2}`,
      }))
    )
  );
  return imageImports;
};

export default defineComponent({
  name: 'AccordionGallery',
  components: {
    SplashMessage,
  },
  setup() {
    const splashImages = ref<ImageImport[]>([]);

    loadImages().then((images) => {
      splashImages.value = images;
    });

    return {
      splashImages,
    };
  },
});
</script>

<style scoped lang="scss">
.container {
  padding: 75px 0;
  margin: 0 auto;
  width: 900px;
}

h1 {
  position: relative;
  margin-bottom: 45px;
  font-family: 'Oswald', sans-serif;
  font-size: 44px;
  text-transform: uppercase;
  color: #424242;
}

.gallery-wrap {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 70vh;
}

.item {
  flex: 1;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: flex 0.8s ease;
}

.item:hover {
  flex: 7;
}
</style>
