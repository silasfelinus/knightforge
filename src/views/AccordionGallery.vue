<template>
  <div class="gallery-wrap">
    <div
      v-for="(image, index) in splashImages"
      :key="image.id"
      :class="['item', `item-${index + 1}`]"
      :style="{ backgroundImage: `url(${image.default})` }"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface ImageImport {
  default: string;
  id: number;
  alt: string;
}

export default defineComponent({
  name: 'AccordionGallery',
  props: {
    imagePaths: {
      type: Array as () => string[],
      required: true,
    },
  },
  setup(props) {
    const loadImages = async () => {
      const imageImports: ImageImport[] = await Promise.all(
        props.imagePaths.map((path, index) =>
          import(/* @vite-ignore */ path).then((img) => ({
            default: img.default,
            id: index + 1,
            alt:
              index < 2
                ? `Splash Image 0${index}`
                : `Secret Image 0${index - 2}`,
          }))
        )
      );

      return imageImports;
    };

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

<style scoped>
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
