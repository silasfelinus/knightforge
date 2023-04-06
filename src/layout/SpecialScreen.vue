<template>
  <vue-draggable-resizable
    class="magic-screen"
    :w="200"
    :h="200"
    :parent="true"
    :snapToGrid="true"
    :grid="10"
    @dragging="onDrag"
    @resizing="onResize"
  >
    <!-- Your content will go here -->
  </vue-draggable-resizable>
</template>

<script lang="ts">
import VueDraggableResizable from 'vue-draggable-resizable';

export default {
  components: {
    VueDraggableResizable,
  },
  props: {
    screenId: {
      type: String,
      required: true,
    },
  },
  methods: {
    onDrag() {
      this.$emit('screenDropped', this.screenId);
    },
    onResize() {
      this.$emit('screenDropped', this.screenId);
    },
  },
};
</script>

<style lang="scss" scoped>
.magic-screen {
  background-color: $accent;
  cursor: move;
}

.vue-draggable-resizable {
  box-sizing: border-box;
  touch-action: none;
}
.vue-draggable-resizable-handle {
  width: 10px;
  height: 10px;
  background-color: black;
  position: absolute;
}
.vue-draggable-resizable-handle-se {
  cursor: nwse-resize;
  right: -5px;
  bottom: -5px;
}
</style>
