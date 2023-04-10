<template>
  <BackgroundEffect :opacity="opacity">
    <!-- Add the graph paper effect implementation here -->
  </BackgroundEffect>
</template>

<script lang="ts">
import BackgroundEffect from './BackgroundEffect.vue';

export default {
  components: {
    BackgroundEffect,
  },
  props: {
    opacity: {
      type: Number,
      default: 0.5,
    },
  },
};
</script>
