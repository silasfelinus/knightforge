<template>
  <div class="background-effect" :style="backgroundStyle">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    opacity: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    backgroundStyle() {
      return {
        opacity: this.opacity,
      };
    },
  },
};
</script>

<style scoped>
.background-effect {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
</style>
