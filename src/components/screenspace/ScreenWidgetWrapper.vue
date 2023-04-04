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
import ScreenWidget from '../../views/ScreenWidget.vue';

export default defineComponent({
  name: 'ScreenWidgetWrapper',
  components: {
    ScreenWidget
  },
  setup() {
    const screens = ref([
      { preset: 'Default', visible: true }
      // ... add more ScreenWidgets as needed
    ]);

    return {
      screens
    };
  }
});
</script>
