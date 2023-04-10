<template>
  <div
    ref="magicScreen"
    class="magic-screen bg-primary text-white text-center q-gutter-md"
    :style="styleObject"
    @interact-dragmove="onDrag"
    @interact-resizemove="onResize"
  >
    <p>Magic Screen</p>
  </div>
</template>

<script>
import interact from 'interactjs';

export default {
  data() {
    return {
      styleObject: {
        width: '200px',
        height: '100px',
        position: 'absolute',
        transform: 'translate(0px, 0px)',
      },
    };
  },
  mounted() {
    interact(this.$refs.magicScreen)
      .draggable({
        inertia: true,
        restrict: {
          restriction: 'parent',
          elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
        },
        onmove: this.onDrag,
        onend: this.onDragEnd,
      })
      .resizable({
        edges: { left: true, right: true, bottom: true, top: true },
        restrictEdges: {
          outer: 'parent',
          endOnly: true,
        },
        restrictSize: {
          min: { width: 50, height: 50 },
        },
        onmove: this.onResize,
      });
  },
  methods: {
    onDrag(event) {
      const x =
        (parseFloat(this.styleObject.transform.split(',')[0].split('(')[1]) ||
          0) + event.dx;
      const y =
        (parseFloat(this.styleObject.transform.split(',')[1]) || 0) + event.dy;
      this.styleObject.transform = `translate(${x}px, ${y}px)`;
    },
    onResize(event) {
      this.styleObject.width = event.rect.width + 'px';
      this.styleObject.height = event.rect.height + 'px';
      const x =
        (parseFloat(this.styleObject.transform.split(',')[0].split('(')[1]) ||
          0) + event.deltaRect.left;
      const y =
        (parseFloat(this.styleObject.transform.split(',')[1]) || 0) +
        event.deltaRect.top;
      this.styleObject.transform = `translate(${x}px, ${y}px)`;
    },
  },
};
</script>

<style scoped>
.magic-screen {
  border: 2px solid white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: grab;
}
</style>
