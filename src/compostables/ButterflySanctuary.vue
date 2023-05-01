<template>
  <div
    class="butterfly-sanctuary"
    :style="{ backgroundImage: `url(${splashImageSrc})` }"
  >
    <ButtonWithLight :color="'white'" :onColor="'yellow'" />
    <ButterflyFeeder :x="300" :y="300" />
    <PathingComponent />
    <ButterflyAnimation
      v-for="butterfly in butterflies"
      :key="butterfly.id"
      :color="'#000000'"
      :targetPosition="{ x: butterfly.x, y: butterfly.y }"
      @updatePosition="handleButterflyPositionChange(butterfly.id, $event)"
    />
    <voice-control
      :initial-butterfly-count="50"
      @more-butterflies="addButterflies"
      @change-picture="changePicture"
    ></voice-control>
    <splash-image @image-changed="updateSplashImageSrc"></splash-image>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ButtonWithLight from './ButtonWithLight.vue';
import ButterflyFeeder from './ButterflyFeeder.vue';
import PathingComponent from './PathingComponent.vue';
import ButterflyAnimation from './ButterflyAnimation.vue';
import VoiceControl from './VoiceControl.vue';
import SplashImage from './SplashBackground.vue';

const splashImageSrc = ref('');

function updateSplashImageSrc(newImageUrl: string) {
  splashImageSrc.value = newImageUrl;
}

const butterflies = ref([
  { id: 1, x: 100, y: 200, state: 'flap' },
  { id: 2, x: 200, y: 100, state: 'flap' },
  { id: 3, x: 400, y: 400, state: 'flap' },
]);

function handleButterflyPositionChange(
  id: number,
  newPosition: { x: number; y: number }
) {
  const index = butterflies.value.findIndex((butterfly) => butterfly.id === id);
  if (index !== -1) {
    butterflies.value[index].x = newPosition.x;
    butterflies.value[index].y = newPosition.y;
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

function changePicture() {
  // Emit an event in the SplashImage component to change the picture
  const splashImageComponent = document.querySelector('splash-image');
  if (splashImageComponent) {
    splashImageComponent.dispatchEvent(new CustomEvent('change-image'));
  }
}
</script>

<style scoped>
butterfly-sanctuary {
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
}
</style>
