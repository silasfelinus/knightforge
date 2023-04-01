<template>
  <div>
    <button @click="changePreset">Change Preset</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useAppStore } from '../stores/app';

export default defineComponent({
  name: 'RemoteControl',
  setup() {
    const appStore = useAppStore();

    const changePreset = () => {
      // You can define logic to change the preset of the desired ScreenWidget
      appStore.changePreset({ side: 'main', preset: 'NewPreset' });
    };

    return {
      changePreset,
    };
  },
});
</script>
