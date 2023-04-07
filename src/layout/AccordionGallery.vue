<template>
  <div class="container">
    <h1>Welcome to the WonderForge</h1>
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

interface ImageImport {
  default: string;
  id: number;
  alt: string;
}

const imagePaths = [
  '../assets/splash/splash00.png',
  '../assets/splash/splash01.png',
  '../assets/splash/splash05.png',
  '../assets/splash/splash04.png',
  '../assets/splash/splash08.png',
  '../assets/splash/splash07.png',
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
