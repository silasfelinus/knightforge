<template>
  <div
    class="magic-box"
    :class="{ opened: opened }"
    :style="{ backgroundColor: interiorColor }"
  >
    <div class="side front"></div>
    <div class="side back"></div>
    <div class="side right"></div>
    <div class="side left"></div>
    <div class="side bottom"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  props: {
    opened: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const interiorColor = computed(() => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgba(${r}, ${g}, ${b}, 0.8)`;
    });

    return { interiorColor };
  },
});
</script>

<style scoped>
.magic-box {
  position: relative;
  width: 100px;
  height: 100px;
  transform-style: preserve-3d;
  transition: transform 0.5s;
}

.magic-box.opened {
  transform: rotateX(-110deg) scale(0.8);
}

.side {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border: 1px solid rgba(0, 0, 0, 0.6);
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
}

.front {
  transform: translateZ(50px);
}

.back {
  transform: rotateY(180deg) translateZ(50px);
}

.right {
  transform: rotateY(90deg) translateZ(50px);
}

.left {
  transform: rotateY(-90deg) translateZ(50px);
}

.bottom {
  transform: rotateX(-90deg) translateZ(50px);
}
</style>
