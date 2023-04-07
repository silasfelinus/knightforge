<template>
  <div class="weather-effect" :style="weatherStyle">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    intensity: {
      type: Number as PropType<number>,
      default: 1,
    },
  },
  computed: {
    weatherStyle(): Record<string, string> {
      return {
        '--intensity': this.intensity.toString(),
      };
    },
  },
});
</script>

<style scoped>
.weather-effect {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
</style>
