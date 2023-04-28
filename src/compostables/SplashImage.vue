<template>
  <div class="splash-image">
    <div
      class="frame"
      :style="{
        borderColor: borderColor,
        borderWidth: borderWidth,
        display: showFrame ? 'block' : 'none',
        maxHeight: isFullSize ? 'none' : '100vh',
      }"
    >
      <img :src="randomImageUrl" alt="Splash image" @click="changeImage" />

      <div
        class="options"
        :style="{
          top: optionsTop,
          left: optionsLeft,
          right: optionsRight,
          bottom: optionsBottom,
        }"
      >
        <label>
          Folder:
          <select v-model="folderName">
            <option value="splash">Splash</option>
            <option value="wondercat">Wondercat</option>
            <option value="wonderchest">Wonderchest</option>
            <option value="wondershed">Wondershed</option>
            <option value="background">Background</option>
          </select>
        </label>
        <label>
          Border color:
          <input type="color" v-model="borderColor" />
        </label>
        <label>
          Width:
          <select v-model="borderWidth">
            <option value="5px">Small</option>
            <option value="10px">Medium</option>
            <option value="20px">Large</option>
          </select>
        </label>
        <label>
          Full size:
          <input type="checkbox" v-model="isFullSize" />
        </label>
        <label>
          Corner:
          <select v-model="optionsCorner">
            <option value="0">Top-Right</option>
            <option value="1">Top-Left</option>
            <option value="2">Bottom-Left</option>
            <option value="3">Bottom-Right</option>
          </select>
        </label>
        <label>
          <i
            class="heart-icon"
            :class="{ 'heart-icon-active': isHeartActive }"
            @click="isHeartActive = !isHeartActive"
          ></i>
        </label>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch, computed } from 'vue';
import { useRandomImage } from '../composables/useRandomImage';

const folderName = ref('splash');
const borderColor = ref('000000');
const borderWidth = ref('2px');

const { getRandomImage } = useRandomImage(folderName);

const showFrame = ref(true);
const randomImageUrl = ref<string>('');
const isFullSize = ref(true);
const optionsCorner = ref('0');
const isHeartActive = ref(false);
const optionsTop = computed(() => {
  return optionsCorner.value === '0' || optionsCorner.value === '1'
    ? '5px'
    : 'unset';
});

const optionsBottom = computed(() => {
  return optionsCorner.value === '2' || optionsCorner.value === '3'
    ? '5px'
    : 'unset';
});

const optionsLeft = computed(() => {
  return optionsCorner.value === '1' || optionsCorner.value === '2'
    ? '5px'
    : 'unset';
});

const optionsRight = computed(() => {
  return optionsCorner.value === '0' || optionsCorner.value === '3'
    ? '5px'
    : 'unset';
});

const changeImage = async () => {
  let newImageUrl: string | null;
  do {
    newImageUrl = await getRandomImage();
  } while (newImageUrl === randomImageUrl.value);

  randomImageUrl.value = newImageUrl || randomImageUrl.value;
};

watch(folderName, () => {
  loadImages();
});

onMounted(() => {
  loadImages();
});

const loadImages = async () => {
  const imageUrl = await getRandomImage();
  if (imageUrl) {
    randomImageUrl.value = imageUrl;
  }
};
</script>

<style scoped>
.splash-image {
  position: relative;
}
.frame {
  border-style: solid;
  padding: 0;
  position: relative;
  overflow: hidden;
  max-width: 100%;
}
img {
  width: 100%;
  height: auto;
  display: block;
}
.options {
  position: absolute;
  background-color: white;
  padding: 5px;
  border: 1px solid black;
  border-radius: 5px;
  transition: top 0.3s, left 0.3s, right 0.3s, bottom 0.3s;
}
.heart-icon {
  font-size: 24px;
  cursor: pointer;
  transition: color 0.3s;
}
.heart-icon:before {
  content: '♡';
}
.heart-icon-active:before {
  content: '♥';
}
.heart-icon-active {
  color: red;
}
</style>
