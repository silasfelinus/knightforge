<template>
  <div class="settingsBar">
    <div class="left">
      <span>Volume: </span>
      <input
        type="range"
        min="0.0"
        max="1.0"
        step="0.01"
        :value="volume"
        list="volumes"
        name="volume"
        @input="changeVolume"
      />
      <datalist id="volumes">
        <option value="0.0" label="Mute"></option>
        <option value="1.0" label="100%"></option>
      </datalist>
    </div>
    <div class="right">
      <span>Current waveform: </span>
      <select name="waveform" v-model="waveform">
        <option value="sine">Sine</option>
        <option value="square" selected>Square</option>
        <option value="sawtooth">Sawtooth</option>
        <option value="triangle">Triangle</option>
        <option value="custom">Custom</option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const volume = ref(0.5);
    const waveform = ref('square');

    const changeVolume = (event: Event) => {
      // Emit an event to update the volume in the parent component
      const target = event.target as HTMLInputElement;
      const value = parseFloat(target.value);
      volume.value = value;
      emit('change-volume', value);
    };

    return { volume, waveform, changeVolume };
  },
});
</script>

<style lang="scss">
/* Add your styles here */
</style>
