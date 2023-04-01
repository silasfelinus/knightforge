<template>
  <div>
    <ScreenWidget
      v-for="(screen, index) in screens"
      :key="index"
      :preset="screen.preset"
      :visible="screen.visible"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ScreenWidget from '@/components/ScreenWidget.vue';

export default defineComponent({
  name: 'ScreenSet1',
  components: {
    ScreenWidget,
  },
  setup() {
    const screens = ref([
      { preset: 'Default', visible: true },
      // ... add more ScreenWidgets as needed for ScreenSet1
    ]);

    return {
      screens,
    };
  },
});
</script>
