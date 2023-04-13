<template>
  <div>
    <button @click="addGameScreen">+</button>
    <select v-model="selectedPhotoset">
      <option value="chest">Chest</option>
      <option value="splash">Splash</option>
      <option value="random">Random</option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useAppStore } from '@/stores/useAppStore';

export default defineComponent({
  setup() {
    const appStore = useAppStore();
    const selectedPhotoset = computed({
      get: () => appStore.selectedPhotoset,
      set: (value: string) => appStore.setSelectedPhotoset(value),
    });

    function addGameScreen() {
      appStore.addGameScreen();
    }

    return {
      selectedPhotoset,
      addGameScreen,
    };
  },
});
</script>
