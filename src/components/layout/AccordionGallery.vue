<template>
  <div class="container">
    <div class="gallery-wrap">
      <div
        v-for="image in images.slice(0, size)"
        :key="image.id"
        :style="{ backgroundImage: `url(${image.filePath})` }"
        class="item"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
interface ImageDisplay {
  id: string;
  filePath: string;
}

export default defineComponent({
  name: 'AccordionGallery',
  props: {
    photosets: {
      type: Array as PropType<Photoset[]>,
      required: true,
    },
    size: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const images: ImageDisplay[] = props.photosets.map((photoset) => ({
      id: `${photoset.galleryName}-${photoset.name}`,
      filePath: photoset.filePath,
    }));

    return {
      images,
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
