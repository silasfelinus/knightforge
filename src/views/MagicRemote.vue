<template>
  <div>
    <button @click="changePreset('main', 'NewPreset')">Change Preset</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useRemoteControl from '../components/screenspace/useRemoteControl';

export default defineComponent({
  name: 'RemoteControl',
  setup() {
    const { changePreset } = useRemoteControl();

    return {
      changePreset,
    };
  },
});
</script>
