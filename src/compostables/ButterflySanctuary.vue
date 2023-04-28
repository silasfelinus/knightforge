<template>
  <div
    class="butterfly-sanctuary"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
  >
    <ButtonWithLight :color="'white'" :onColor="'yellow'" />
    <ButterflyFeeder :x="300" :y="300" />
    <PathingComponent />
    <ButterflyAnimation
      v-for="butterfly in butterflies"
      :key="butterfly.id"
      :x="butterfly.x"
      :y="butterfly.y"
      :butterflyState="butterfly.state"
      @stateChanged="handleButterflyStateChange(butterfly.id, $event)"
    />
    <voice-control
      :initial-butterfly-count="50"
      @more-butterflies="addButterflies"
      @change-picture="changePicture"
    ></voice-control>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import ButtonWithLight from './ButtonWithLight.vue';
import ButterflyFeeder from './ButterflyFeeder.vue';
import PathingComponent from './PathingComponent.vue';
import ButterflyAnimation from './ButterflyAnimation.vue';
import VoiceControl from './SerendipityVoice.vue';
import { useRandomImage } from '@/composables/useRandomImage';

const folderName = ref('background');
const { getRandomImage } = useRandomImage(folderName);
const backgroundImage = ref('');

async function fetchBackgroundImage() {
  const image = await getRandomImage();
  if (image) {
    backgroundImage.value = image;
  }
}

onMounted(fetchBackgroundImage);

const butterflies = ref([
  { id: 1, x: 100, y: 200, state: 'flap' },
  { id: 2, x: 200, y: 100, state: 'flap' },
  { id: 3, x: 400, y: 400, state: 'flap' },
]);

function handleButterflyStateChange(id: number, newState: string) {
  const index = butterflies.value.findIndex((butterfly) => butterfly.id === id);
  if (index !== -1) {
    butterflies.value[index].state = newState;
  }
}

function addButterflies() {
  const newButterflies = Array.from({ length: 10 }, (_, index) => ({
    id: butterflies.value.length + index + 1,
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    state: 'flap',
  }));

  butterflies.value = [...butterflies.value, ...newButterflies];
}

async function changePicture() {
  await fetchBackgroundImage();
}
</script>

<style scoped>
.butterfly-sanctuary {
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
}
</style>
