<template>
  <div class="container">
    <div class="accordion-gallery">
      <div
        class="accordion-item"
        v-for="(item, index) in accordionItems"
        :key="index"
        @click="expandAccordion(index)"
        @mouseover="highlightedIndex = index"
        @mouseleave="highlightedIndex = -1"
        :class="{ expanded: expandedIndex === index }"
        :style="{ width: getItemWidth(index) }"
      >
        <div class="item-info">
          <div class="item-title">{{ item.title }}</div>
          <div
            class="item-blurb"
            v-if="highlightedIndex === index && expandedIndex !== index"
          >
            {{ item.blurb }}
          </div>
          <div class="item-details" v-if="expandedIndex === index">
            <div class="item-blurb">{{ item.blurb }}</div>
            <div class="item-description">{{ item.expandedDescription }}</div>
            <button class="item-button">Learn More</button>
          </div>
        </div>
        <q-card
          class="semi-transparent-card"
          :style="{ width: getItemWidth(index) }"
        >
          <q-card-section class="text-content">
            <div class="item-title">{{ item.title }}</div>
            <div
              class="item-blurb"
              v-if="highlightedIndex === index && expandedIndex !== index"
            >
              {{ item.blurb }}
            </div>
            <div class="item-details" v-if="expandedIndex === index">
              <div class="item-blurb">{{ item.blurb }}</div>
              <div class="item-description">{{ item.expandedDescription }}</div>
              <button class="item-button">Learn More</button>
            </div>
          </q-card-section>
        </q-card>
        <img
          :src="randomImages[index]"
          :alt="item.title"
          class="accordion-image"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRandomImage } from '@/composables/useRandomImage';

const accordionItems = ref([
  {
    title: 'Make Art',
    folder: 'wonderchest',
    blurb: 'Unleash your inner artist',
    expandedDescription:
      'Dive into the world of art and unleash your creativity with our easy-to-use tools. Learn various techniques and explore different mediums to create stunning pieces of art. Join our vibrant community of artists and share your unique creations with art enthusiasts from around the globe.',
  },
  {
    title: 'Robot Builder',
    folder: 'wondercat',
    blurb: 'Assemble your mechanical buddy',
    expandedDescription:
      'Embrace your inner engineer and build the perfect robot companion with our advanced robot building kit. Customize your creation with a vast array of components and functions. Watch your mechanical buddy come to life and embark on exciting adventures together!',
  },
  {
    title: 'Eureka!',
    folder: 'wondershed',
    blurb: 'Ignite your curiosity',
    expandedDescription:
      'Discover new ideas and insights with our innovative Eureka platform. Feed your curiosity and expand your knowledge with a plethora of thought-provoking content. Join our community of curious minds and embark on a journey of continuous learning and growth.',
  },
  {
    title: 'Cafe Purr',
    folder: 'splash',
    blurb: 'Indulge in feline therapy',
    expandedDescription:
      'Step into our cozy cat haven, Cafe Purr, and relax with our friendly feline friends. Enjoy a warm cup of coffee or tea, and indulge in our mouth-watering pastries while you unwind in the company of purring kitties. Our cat cafe is the purr-fect escape from the hustle and bustle of everyday life.',
  },
  {
    title: 'Livechat',
    folder: 'background',
    blurb: 'Connect, converse, and collaborate',
    expandedDescription:
      'Connect and engage with like-minded individuals from around the world through our dynamic Livechat platform. Share your thoughts, learn from others, and forge meaningful connections. Collaborate on exciting projects, discuss intriguing ideas, and immerse yourself in our global community of diverse perspectives.',
  },
]);

const expandedIndex = ref(-1);
const highlightedIndex = ref(-1);
const randomImages = ref<string[]>([]);

async function loadRandomImages() {
  for (const item of accordionItems.value) {
    const { getRandomImage } = useRandomImage(ref(item.folder));
    const imageUrl = await getRandomImage();
    randomImages.value.push(imageUrl || '');
  }
}

onMounted(async () => {
  await loadRandomImages();
});

function expandAccordion(index: number): void {
  expandedIndex.value = expandedIndex.value === index ? -1 : index;
}

const accordionWidth = ref(100 / accordionItems.value.length);
const smallWidth = ref(accordionWidth.value / 2);
const mediumWidth = ref(accordionWidth.value * 2.5);
const largeWidth = ref(accordionWidth.value * 4);

function getItemWidth(index: number) {
  if (highlightedIndex.value === -1 && expandedIndex.value === -1) {
    return `${accordionWidth.value}%`;
  } else if (highlightedIndex.value !== -1 && expandedIndex.value === -1) {
    return highlightedIndex.value === index
      ? `${mediumWidth.value}%`
      : `${smallWidth.value}%`;
  } else if (expandedIndex.value !== -1) {
    return expandedIndex.value === index
      ? `${largeWidth.value}%`
      : `${smallWidth.value}%`;
  }
}
</script>
<style lang="scss">
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.accordion-gallery {
  display: flex;
  width: 100%;
  max-width: 100vw;
  height: 100%;
  overflow: hidden;
}

.accordion-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100% / 5);
  max-width: 100%;
  transition: width 0.5s;
  overflow: hidden;
  position: relative;
  height: 100%;
}

.item-info {
  display: none;
}

.semi-transparent-card {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: rgba(
    0,
    0,
    0,
    0.5
  ); // Adjust the rgba values for the desired color and transparency
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
}

.text-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.item-title,
.item-blurb,
.item-description {
  color: rgba(255, 255, 255, 0.9);
  font-size: 16px;
  text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.8);
}

.item-description {
  padding-top: 8px;
}

.item-button {
  display: inline-block;
  margin-top: 8px;
  padding: 6px 12px;
  background-color: #1a73e8;
  color: white;
  border-radius: 4px;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.accordion-image {
  object-fit: cover;
  height: 100%;
}

.accordion-gallery:hover .accordion-item {
  width: calc(100% * var(--smallWidth));
}

.accordion-gallery:hover .accordion-item:hover {
  width: calc(100% * var(--mediumWidth));
}

.accordion-gallery .accordion-item.expanded {
  width: calc(100% * var(--largeWidth));
}
</style>
