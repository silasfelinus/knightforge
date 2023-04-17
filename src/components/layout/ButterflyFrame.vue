<template>
  <div class="butterfly-frame" @click="moveToCorner">
    <div class="corner circle top-left"></div>
    <div class="corner circle top-right"></div>
    <div class="corner circle bottom-left"></div>
    <div class="corner circle bottom-right"></div>
    <div class="frame-content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ButterflyFrame',
  setup(_, { emit }) {
    function moveToCorner() {
      const cornerPositions = [
        { x: 0, y: 0 }, // top-left
        { x: 100, y: 0 }, // top-right
        { x: 0, y: 100 }, // bottom-left
        { x: 100, y: 100 }, // bottom-right
      ];

      // Choose a random corner from the cornerPositions array
      const randomIndex = Math.floor(Math.random() * cornerPositions.length);
      const corner = cornerPositions[randomIndex];

      // Calculate the new coordinates (x, y, z)
      const newX = corner.x;
      const newY = corner.y;
      const newZ = Math.random() * 50; // Random z value between 0 and 50

      // Emit the move event with the new coordinates
      emit('move', newX, newY, newZ);
    }

    return {
      moveToCorner,
    };
  },
});
</script>

<style lang="scss">
.butterfly-frame {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.corner {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
}

.circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #333;
}

.top-left {
  top: 0;
  left: 0;
  transform: translateY(-50%) translateX(-50%);
}

.top-right {
  top: 0;
  right: 0;
  transform: translateY(-50%) translateX(50%);
}

.bottom-left {
  bottom: 0;
  left: 0;
  transform: translateY(50%) translateX(-50%);
}

.bottom-right {
  bottom: 0;
  right: 0;
  transform: translateY(50%) translateX(50%);
}

.frame-content {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
