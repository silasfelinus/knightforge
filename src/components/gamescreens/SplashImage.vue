<template>
  <div class="splash-image">
    <img
      v-if="randomImageUrl"
      :src="randomImageUrl"
      alt="Splash image"
      class="splash-img"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

type ImageListType = { [key: string]: { default: string } };

export default defineComponent({
  props: {
    folderName: {
      type: String,
      default: 'splash',
    },
  },
  setup() {
    const randomImageUrl = ref('');
    let imagesList: ImageListType = {};

    const getRandomImageUrl = () => {
      const imageNames = Object.keys(imagesList);
      if (imageNames.length === 0) {
        console.error('No images found in the folder');
        return;
      }
      const randomIndex = Math.floor(Math.random() * imageNames.length);
      const imageModule = imagesList[imageNames[randomIndex]];
      randomImageUrl.value = imageModule.default;
    };

    const loadImages = async () => {
      try {
        const images = import.meta.glob('@/assets/images/splash/*.webp');
        const imageModules = await Promise.all(
          Object.values(images).map((importImage) => importImage())
        );

        imagesList = imageModules.reduce((list, module, index) => {
          list[Object.keys(images)[index]] = module;
          return list;
        }, {});
      } catch (error) {
        console.error('Error while importing image:', error);
      }

      getRandomImageUrl();
    };

    onMounted(() => {
      loadImages();
    });

    return { randomImageUrl };
  },
});
</script>
<style scoped>
.splash-img {
  max-width: 100%;
  max-height: 10vh;
  object-fit: contain;
  display: block;
}
</style>
