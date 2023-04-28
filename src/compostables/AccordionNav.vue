<template>
  <div class="accordion-gallery">
    <div
      class="accordion-item"
      v-for="(item, index) in accordionItems"
      :key="index"
      @click="expandAccordion(index)"
      :style="{ width: accordionWidth(index) }"
    >
      <div class="item-title">{{ item.title }}</div>
      <img
        v-if="expandedIndex === index"
        :src="randomImages[index]"
        :alt="item.title"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue';
import { useRandomImage } from '@/composables/useRandomImage';

export default defineComponent({
  name: 'AccordionGallery',
  setup() {
    const accordionItems = ref([
      { title: 'Make Art', folder: 'wonderchest' },
      { title: 'Robot Builder', folder: 'wondercat' },
      { title: 'Eureka!', folder: 'wonderlab' },
      { title: 'Cafe Purr', folder: 'splash' },
      { title: 'Livechat', folder: 'background' },
    ]);
    const expandedIndex = ref(-1);
    const randomImages = ref<string[]>([]);

    async function loadRandomImages() {
      for (const item of accordionItems.value) {
        const { getRandomImage } = useRandomImage(ref(item.folder));
        const imageUrl = await getRandomImage();
        randomImages.value.push(imageUrl || '');
      }
    }

    watchEffect(() => {
      loadRandomImages();
    });

    function expandAccordion(index: number): void {
      expandedIndex.value = expandedIndex.value === index ? -1 : index;
    }

    function accordionWidth(index: number): string {
      if (expandedIndex.value === -1) {
        return '20%';
      }
      return expandedIndex.value === index ? '80%' : '5%';
    }

    return {
      accordionItems,
      expandAccordion,
      accordionWidth,
      expandedIndex,
      randomImages,
    };
  },
});
</script>

<style scoped>
.accordion-gallery {
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.accordion-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  transition: width 0.5s;
  overflow: hidden;
  position: relative;
}

.item-title {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 8px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  font-size: 14px;
}

img {
  width: 100%;
  height: auto;
}
</style>
