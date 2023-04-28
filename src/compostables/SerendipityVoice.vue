<script setup>
import { ref, onMounted, computed } from 'vue';
import ButterflyHorde from '@/components/wonderlab/ButterflyHorde.vue';
const butterflyCount = ref(50); // Initial count
const transcript = ref('');
const isRecording = ref(false);
const recordingStatus = computed(() =>
  isRecording.value ? 'Recording...' : 'Stopped'
);

const textSize = ref(16);
const textColor = ref('#fff');
const modeMessage = ref('');
const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const sr = new Recognition();
onMounted(() => {
  // ... existing onMounted code ...
});
const CheckForCommand = (result) => {
  const t = result[0].transcript;
  if (t.includes('stop recording')) {
    sr.stop();
  } else if (t.includes('what is the time') || t.includes("what's the time")) {
    sr.stop();
    alert(new Date().toLocaleTimeString());
    setTimeout(() => sr.start(), 100);
  } else if (t.includes('Serendipity')) {
    textSize.value += 4;
    modeMessage.value = 'Action Mode';
  } else if (t.includes('Lucy')) {
    textSize.value -= 4;
    textColor.value = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    modeMessage.value = 'Smol Mode';
  } else if (t.includes('More Butterflies')) {
    butterflyCount.value += butterflyCount.value < 3 ? 10 : 100;
  } else if (t.includes('Ariel')) {
    textSize.value = 16;
    textColor.value = '#fff';
    modeMessage.value = 'Boring Mode';
    setTimeout(() => {
      modeMessage.value = '';
    }, 2000);
  }
};
const ToggleMic = () => {
  if (isRecording.value) {
    sr.stop();
  } else {
    sr.start();
  }
};
</script>

<template>
  <div class="app">
    <div class="switch-wrapper">
      <label class="switch">
        <input type="checkbox" @change="ToggleMic" />
        <span class="slider round"></span>
      </label>
      <span class="status">{{ recordingStatus }}</span>
    </div>
    <div
      class="transcript"
      :style="{ fontSize: textSize + 'px', color: textColor }"
      v-text="transcript"
    ></div>
    <div class="mode-notice" v-if="modeMessage">{{ modeMessage }}</div>
  </div>
</template>

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
  text-align: center;
  max-width: 80%;
  line-height: 1.5;
}
.boring-notice {
  position: fixed;
  top: 20px;
  right: 20px;
  font-size: 24px;
  font-weight: bold;
  color: #f00;
  animation: flash 2s;
}
.mode-notice {
  position: fixed;
  top: 20px;
  left: 20px;
  font-size: 24px;
  font-weight: bold;
  color: #3e9aff; /* Lab blueprint blue */
}
@keyframes flash {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>
