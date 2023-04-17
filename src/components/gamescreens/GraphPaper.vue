<template>
  <div class="grid-and-columns">
    <div class="grid"></div>
    <div class="columns">
      <div v-for="column in numberOfColumns" :key="column" class="column"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'GridAndColumns',
  setup() {
    const numberOfColumns = ref(6);

    return {
      numberOfColumns,
    };
  },
});
</script>

<style scoped>
.grid-and-columns {
  position: absolute;
  width: 100%;
  height: 100%;
  perspective: 1000px;
}

.grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: repeating-linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2) 1px,
      transparent 1px,
      transparent 50px
    ),
    repeating-linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2) 1px,
      transparent 1px,
      transparent 50px
    );
  pointer-events: none;
}

.columns {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
}

.column {
  position: absolute;
  width: 50px;
  height: 100%;
  background: rgba(100, 100, 100, 0.5);
  transform: translateY(50%) rotateX(45deg) translateY(-50%);
}

.column:nth-child(2n) {
  transform: translateY(50%) rotateX(-45deg) translateY(-50%);
}
</style>
