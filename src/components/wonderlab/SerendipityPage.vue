<template>
  <q-layout id="serendipity-page">
    <header class="header">
      <SerendipityVoice />
    </header>
    <div class="container">
      <div class="features">
        <ToyBox />
        <HiddenButterflyHorde v-if="hiddenButterflyVisible" />
        <ButterflyHorde v-if="voiceActivatedButterflies" />
        <DraggableComponent />
        <BubbleMessage />
        <SplashFolder :folderName="'serendipity-avatar'" />
      </div>
    </div>
  </q-layout>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import ButterflyHorde from '@/components/butterfly/ButterflyHorde.vue';
import HiddenButterflyHorde from '@/components/butterfly/HiddenButterflyHorde.vue';
import DraggableComponent from '@/components/serendipity/DraggableComponent.vue';
import ToyBox from '@/components/serendipity/ToyBox.vue';
import BubbleMessage from '@/components/serendipity/BubbleMessage.vue';
import SplashFolder from '@/components/gamescreens/SplashFolder.vue';
import SerendipityVoice from '@/components/serendipity/SerendipityVoice.vue';

const hiddenButterflyVisible = ref(false);
const voiceActivatedButterflies = ref(false);
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fira sans', sans-serif;
}
body {
  background: $primary;
  color: $secondary;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
}
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
  position: fixed;
  top: 0;
  z-index: 100;
}
.container {
  display: grid;
  grid-template-rows: 1fr;
  grid-gap: 20px;
  padding: 20px;
  padding-top: 80px;
  height: 100%;
}
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: minmax(200px, auto);
  grid-gap: 20px;
  width: 100%;
}
.features > * {
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
