<!-- src/components/NavigationWidget.vue -->
<template>
  <div class="navigation-widget">
    <q-card v-for="(screen, index) in screens" :key="index" class="q-ma-md">
      <q-card-section>
        <div class="text-h6">{{ screen.name }}</div>
      </q-card-section>
      <q-card-actions>
        <q-select
          filled
          dense
          v-model="selectedPresets[index]"
          :options="presetOptions"
          label="Select Preset"
          @input="changePreset(screen.side, selectedPresets[index])"
        />
        <q-btn
          color="primary"
          label="Next Preset"
          @click="nextPreset(screen.side)"
        />
        <q-btn
          color="negative"
          label="Toggle Visibility"
          @click="toggleVisibility(screen.side)"
        />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'NavigationWidget',
  setup() {
    const store = useStore();

    const screens = computed(() => [
      { name: 'Left Sidebar', side: 'left' },
      { name: 'Main Widget', side: 'main' },
      { name: 'Right Sidebar', side: 'right' },
    ]);

    const presetOptions = [
      'TextInput',
      'SplashScreen',
      'ChatWidget',
      /* Add more presets here */
    ];

    const selectedPresets = [
      store.getters.leftPreset,
      store.getters.mainPreset,
      store.getters.rightPreset,
    ];

    function changePreset(side: string, preset: string) {
      store.dispatch('changePreset', { side, preset });
    }

    function nextPreset(side: string) {
      // Implement next preset logic
    }

    function toggleVisibility(side: string) {
      // Implement toggle visibility logic
    }

    return {
      screens,
      presetOptions,
      selectedPresets,
      changePreset,
      nextPreset,
      toggleVisibility,
    };
  },
});
</script>

<style scoped>
.navigation-widget {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
