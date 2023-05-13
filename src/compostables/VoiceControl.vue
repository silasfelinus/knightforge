<script setup>
import { ref, onMounted, computed } from 'vue';

const emits = defineEmits(['more-butterflies', 'change-picture']);

const transcript = ref('');
const isRecording = ref(false);
const recordingStatus = computed(() =>
  isRecording.value ? 'Recording...' : 'Stopped'
);

const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const sr = new Recognition();

onMounted(() => {
  sr.addEventListener('result', (e) => {
    const result = e.results[e.resultIndex];
    transcript.value = result[0].transcript;

    CheckForCommand(result);
  });

  sr.addEventListener('end', () => {
    if (isRecording.value) {
      sr.start();
    }
  });
});

const CheckForCommand = (result) => {
  const t = result[0].transcript;

  if (t.includes('More Butterflies')) {
    emits('more-butterflies');
  } else if (t.includes('change picture')) {
    emits('change-picture');
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
    <div class="transcript" v-text="transcript"></div>
  </div>
</template>

<!-- Add the existing styles here -->
