<template>
  <div>
    <MagicFrame
      v-for="(screen, index) in screens"
      :key="index"
      :preset="screen.preset"
      :visible="screen.visible"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import MagicFrame from '../../views/MagicFrame.vue';

export default defineComponent({
  name: 'MagicFrameWrapper',
  components: {
    MagicFrame
  },
  setup() {
    const screens = ref([
      { preset: 'Default', visible: true }
      // ... add more MagicFrames as needed
    ]);

    return {
      screens
    };
  }
});
</script>
