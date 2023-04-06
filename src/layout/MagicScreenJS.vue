<template>
  <div class="magic-screen" @mousedown="startDrag" @mouseup="endDrag">
    <div class="resize-handle" ref="screenRef"></div>
    <!-- Your content will go here -->
  </div>
</template>

<script>
//Uses Interactjs for logic, wonky resizing still
import interact from 'interactjs';

export default {
  props: {
    screenId: {
      type: String,
      required: true,
    },
  },
  mounted() {
    interact(this.$el).draggable({
      modifiers: [interact.modifiers.restrictRect({ restriction: 'parent' })],
      onmove: this.onMove,
    });

    interact(this.$refs.screenRef)
      .resizable({
        edges: { left: true, right: true, bottom: true, top: true },
        modifiers: [
          interact.modifiers.restrictSize({ min: { width: 100, height: 100 } }),
        ],
      })
      .on('resizemove', this.onResize);
  },
  methods: {
    onMove(event) {
      const target = event.target;
      const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
      const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

      target.style.transform = `translate(${x}px, ${y}px)`;
      target.setAttribute('data-x', x);
      target.setAttribute('data-y', y);
    },
    startDrag() {
      this.$emit('screenDropped', this.screenId);
    },
    endDrag() {
      this.$emit('screenDropped', this.screenId);
    },
    onResize(event) {
      const target = this.$el;
      target.style.width = `${event.rect.width}px`;
      target.style.height = `${event.rect.height}px`;

      const x =
        (parseFloat(target.getAttribute('data-x')) || 0) + event.deltaRect.left;
      const y =
        (parseFloat(target.getAttribute('data-y')) || 0) + event.deltaRect.top;

      target.style.transform = `translate(${x}px, ${y}px)`;
      target.setAttribute('data-x', x);
      target.setAttribute('data-y', y);
    },
  },
};
</script>

<style lang="scss">
.magic-screen {
  position: absolute;
  background-color: $accent;
  width: 200px;
  height: 200px;
  /* Add any other desired styles */
}

.resize-handle {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 10px;
  height: 10px;
  background-color: black;
  cursor: nwse-resize;
}
</style>
