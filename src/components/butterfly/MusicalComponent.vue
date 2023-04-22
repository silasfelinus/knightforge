<template>
  <div>
    <h1>Wind Chimes</h1>
    <button @click="playChimes">Play Chimes</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue';

export default defineComponent({
  name: 'WindChimes',
  setup() {
    const chimes = ref<OscillatorNode[]>([]);
    const baseFreq = 261.63; // C4
    const numChimes = 8;
    let context: AudioContext | null = null;

    onMounted(() => {
      context = new AudioContext();

      // generate the chimes
      for (let i = 0; i < numChimes; i++) {
        const freq = baseFreq * Math.pow(2, i / 12);
        const chime = context.createOscillator();
        chime.frequency.setValueAtTime(freq, context.currentTime);
        chime.type = 'triangle';
        chime.connect(context.destination);
        chimes.value.push(chime);
      }
    });

    onUnmounted(() => {
      if (context) {
        context.close();
      }
    });

    function playChimes() {
      // start each chime
      chimes.value.forEach((chime) => {
        chime.start();
      });

      // stop each chime after 1 second
      setTimeout(() => {
        chimes.value.forEach((chime) => {
          chime.stop();
        });
      }, 1000);
    }

    return {
      chimes,
      playChimes,
    };
  },
});
</script>
