<template>
  <q-layout id="wonder-space">
    <div class="container">
      <div class="features">
        <ButterflyHorde />
        <DraggableComponent />
        <BubbleMessage />
        <ToyBox />
        <SplashFolder :folderName="'wonderchest'" />
        <ButterflyChest />
        <SerendipityVoice />
      </div>
    </div>
  </q-layout>
</template>

<script>
import ButterflyHorde from '@/components/butterfly/ButterflyHorde.vue';
import DraggableComponent from '@/components/wonderlab/DraggableComponent.vue';
import ToyBox from '@/components/wonderlab/ToyBox.vue';
import BubbleMessage from '@/components/wonderlab/BubbleMessage.vue';
import SplashFolder from '@/components/gamescreens/SplashFolder.vue';
import ButterflyChest from '@/components/butterfly/ButterflyChest.vue';
import SerendipityVoice from '@/components/wonderlab/SerendipityVoice.vue';

export default {
  name: 'WonderSpace',
  components: {
    ButterflyHorde,
    DraggableComponent,
    ToyBox,
    BubbleMessage,
    SplashFolder,
    ButterflyChest,
    SerendipityVoice,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fira sans', sans-serif;
}
body {
  background: #1a1f36;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 20px;
}
.switch-wrapper {
  display: flex;
  gap: 10px;
  align-items: center;
}
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
}
.slider:before {
  position: absolute;
  content: '';
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: 0.4s;
}
input:checked + .slider {
  background-color: #3e9aff; /* Lab blueprint blue */
}
input:checked + .slider:before {
  transform: translateX(26px);
}
.slider.round {
  border-radius: 34px;
}
.slider.round:before {
  border-radius: 50%;
}
.status {
  font-size: 18px;
  font-weight: bold;
}
.transcript {
  transition: all 1s;
}
.transcript.serendipity {
  font-size: 48px;
  color: #3e9aff; /* Lab blueprint blue */
  animation: colorChange 2s infinite;
}
@keyframes colorChange {
  0% {
    color: #3e9aff;
  }
  25% {
    color: #ff7f50;
  } /* Fun accent color 1 */
  50% {
    color: #7fffd4;
  } /* Fun accent color 2 */
  75% {
    color: #ff7f50;
  }
  100% {
    color: #3e9aff;
  }
}
</style>
