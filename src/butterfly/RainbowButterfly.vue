<template>
  <div class="rainbow-butterfly" @click="emitLanded">
    <div class="box" :style="{ backgroundColor: color }"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  // ...
  props: {
    butterflyId: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    x: {
      type: Number,
      required: true,
    },
    y: {
      type: Number,
      required: true,
    },
  },
  computed: {
    positionStyle() {
      return {
        left: this.x + 'px',
        top: this.y + 'px',
      };
    },
  },
  methods: {
    emitLanded() {
      this.$emit('butterflyLanded', this.butterflyId);
    },
  },
});
</script>
