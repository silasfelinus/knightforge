<template>
  <div id="butterfly-mascot" ref="container">
    <!-- Create an SVG container for the butterfly -->
    <svg ref="svg" width="100%" height="100%" @mousemove="onMouseMove"></svg>
  </div>
</template>

<script>
import { createButterflySvg } from './butterflySvg';
import {
  animateButterfly,
  updateButterflyPosition,
} from './butterflyAnimation';

export default {
  name: 'ButterflyMascot',
  data() {
    return {
      butterfly: null,
      mouseX: 0,
      mouseY: 0,
    };
  },
  mounted() {
    // Initialize the SVG and create the butterfly
    this.initSvg();
    this.createButterfly();
  },
  methods: {
    initSvg() {
      const container = this.$refs.container;
      this.$refs.svg.setAttribute(
        'viewBox',
        `0 0 ${container.clientWidth} ${container.clientHeight}`
      );
    },
    createButterfly() {
      this.butterfly = createButterflySvg();
      this.$refs.svg.appendChild(this.butterfly);
      animateButterfly(this.butterfly);
    },
    onMouseMove(event) {
      // Update the mouse coordinates when the mouse moves
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
      updateButterflyPosition(this.butterfly, this.mouseX, this.mouseY);
    },
  },
};
</script>

<style scoped>
#butterfly-mascot {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
