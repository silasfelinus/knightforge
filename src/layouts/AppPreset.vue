<template>
  <component :is="loadedPreset" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

const PRESET = 'AppSimple'; // Change this to switch between presets

export default defineComponent({
  setup() {
    const loadedPreset = ref(null);

    import(/* @vite-ignore */ `@/layouts/${PRESET}.vue`)
      .then((module) => {
        loadedPreset.value = module.default;
      })
      .catch((error) => {
        console.error(`Failed to load preset: ${PRESET}`, error);
        import('@/pages/ErrorNotFound.vue').then((module) => {
          loadedPreset.value = module.default;
        });
      });

    return { loadedPreset };
  },
});
</script>
