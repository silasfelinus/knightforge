<template>
  <div class="remote-widget">
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
          @update:modelValue="changePreset(screen.side, selectedPresets[index])"
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
import { defineComponent } from 'vue';
import useRemoteWidget from './useRemoteWidget';

export default defineComponent({
  name: 'RemoteWidget',
  setup() {
    const {
      screens,
      presetOptions,
      selectedPresets,
      changePreset,
      nextPreset,
      toggleVisibility,
    } = useRemoteWidget();

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
.remote-widget {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
