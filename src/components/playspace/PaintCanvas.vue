<!-- src/components/PaintCanvas.vue -->
<template>
  <div ref="canvasContainer" class="canvas-container">
    <canvas
      ref="paintCanvas"
      @mousedown="startDrawing"
      @mousemove="draw"
      @mouseup="stopDrawing"
    />
  </div>
</template>

<script>
import { ref, onMounted, inject } from 'vue';

export default {
  setup() {
    const paintCanvas = ref(null);
    const canvasContainer = ref(null);
    const currentColor = inject('currentColor');
    const currentBrush = inject('currentBrush');
    let context = null;
    let drawing = false;

    const startDrawing = event => {
      drawing = true;
      context.beginPath();
      context.moveTo(event.clientX, event.clientY);
    };

    const draw = event => {
      if (!drawing) return;
      context.strokeStyle = currentColor.value;

      switch (currentBrush.value) {
        case 'thick':
          context.lineWidth = 10;
          break;
        case 'dotted':
          context.setLineDash([5, 10]);
          break;
        default:
          context.lineWidth = 2;
          context.setLineDash([]);
      }

      context.lineTo(event.clientX, event.clientY);
      context.stroke();
    };

    const stopDrawing = () => {
      drawing = false;
    };

    onMounted(() => {
      paintCanvas.value.width = canvasContainer.value.clientWidth;
      paintCanvas.value.height = canvasContainer.value.clientHeight;
      context = paintCanvas.value.getContext('2d');
    });

    return {
      paintCanvas,
      canvasContainer,
      startDrawing,
      draw,
      stopDrawing
    };
  }
};
</script>

<style scoped>
.canvas-container {
  flex-grow: 1;
  position: relative;
  background-color: #fff;
}

canvas {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
