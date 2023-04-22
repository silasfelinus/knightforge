<template>
  <div class="keyboard">
    <div v-for="(octave, idx) in noteFreq" :key="idx" class="octave">
      <template v-for="(freq, note) in octave">
        <div
          v-if="note.length === 1"
          class="key"
          :key="note"
          :data-octave="idx"
          :data-note="note"
          :data-frequency="freq"
          @mousedown="notePressed"
          @mouseup="noteReleased"
          @mouseover="notePressed"
          @mouseleave="noteReleased"
        >
          <div>
            {{ note }}<sub>{{ idx }}</sub>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, onMounted, onUnmounted } from 'vue';

export default defineComponent({
  props: {
    noteFreq: {
      type: Array as PropType<Array<Record<string, number>>>,
      required: true,
    },
    mainGainNode: {
      type: Object as PropType<GainNode>,
      required: true,
    },
    waveform: {
      type: String,
      required: true,
    },
    customWaveform: {
      type: Object as PropType<PeriodicWave>,
      required: true,
    },
  },
  setup(props) {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscList = new Array(9).fill(null).map(() => ({}));

    const playTone = (freq: number) => {
      const osc = audioContext.createOscillator();
      osc.connect(props.mainGainNode);

      const type = props.waveform;

      if (type === 'custom') {
        osc.setPeriodicWave(props.customWaveform);
      } else {
        osc.type = type as OscillatorType;
      }

      osc.frequency.value = freq;
      osc.start();

      return osc;
    };

    const notePressed = (event: MouseEvent) => {
      if (event.buttons & 1) {
        const target = event.target as HTMLElement;
        const dataset = target.dataset;

        if (!dataset['pressed']) {
          const octave = Number(dataset['octave']);
          const note = dataset['note'] as string;
          oscList[octave][note] = playTone(Number(dataset['frequency']));
          dataset['pressed'] = 'yes';
        }
      }
    };

    const noteReleased = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const dataset = target.dataset;

      if (dataset && dataset['pressed']) {
        const octave = Number(dataset['octave']);
        const note = dataset['note'] as string;
        oscList[octave][note].stop();
        delete oscList[octave][note];
        delete dataset['pressed'];
      }
    };

    const keyNote = (event: KeyboardEvent) => {
      const elKey = Array.from(document.querySelectorAll('.key')).find(
        (key) => key.getAttribute('data-key-code') === event.code
      ) as HTMLElement;

      if (elKey) {
        if (event.type === 'keydown') {
          elKey.tabIndex = -1;
          elKey.focus();
          elKey.classList.add('active');
          notePressed({ buttons: 1, target: elKey } as MouseEvent);
        } else {
          elKey.classList.remove('active');
          noteReleased({ buttons: 1, target:
            onMounted(() => {
  window.addEventListener('keydown', keyNote);
  window.addEventListener('keyup', keyNote);
});

onUnmounted(() => {
  window.removeEventListener('keydown', keyNote);
  window.removeEventListener('keyup', keyNote);
});

return {
  notePressed,
  noteReleased,
};
},
});
</script>

<style lang="scss">
.keyboard {
  width: auto;
  padding: 0;
  margin: 0;
}

.key {
  cursor: pointer;
  font: 16px 'Open Sans', 'Lucida Grande', 'Arial', sans-serif;
  border: 1px solid black;
  border-radius: 5px;
  width: 20px;
  height: 80px;
  text-align: center;
  box-shadow: 2px 2px darkgray;
  display: inline-block;
  position: relative;
  margin-right: 3px;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

.key div {
  position: absolute;
  bottom: 0;
  text-align: center;
  width: 100%;
  pointer-events: none;
}

.key div sub {
  font-size: 10px;
  pointer-events: none;
}

.key:hover {
  background-color: #eef;
}

.key:active,
.active {
  background-color: #000;
  color: #fff;
}

.octave {
  display: inline-block;
  padding: 0 6px 0 0;
}
</style>
