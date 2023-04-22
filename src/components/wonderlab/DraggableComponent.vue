<template>
  <div class="draggable-container">
    <div
      class="draggable-component"
      :style="{ backgroundColor: color, borderColor: borderColor }"
    >
      <h4>{{ sillyName }}</h4>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import interact from 'interactjs';
import { DragEvent, ResizeEvent } from '@interactjs/types';

export default defineComponent({
  name: 'DraggableComponent',
  data() {
    return {
      color: this.randomColor(),
      borderColor: this.randomColor(),
      sillyName: this.generateSillyName(),
    };
  },
  methods: {
    randomColor(): string {
      return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    },
    generateSillyName(): string {
      const adjectives = ['Fluffy', 'Giggly', 'Grumpy', 'Snazzy'];
      const nouns = ['Penguin', 'Potato', 'Giraffe', 'Spaceship'];
      return (
        adjectives[Math.floor(Math.random() * adjectives.length)] +
        ' ' +
        nouns[Math.floor(Math.random() * nouns.length)]
      );
    },
  },
  mounted() {
    const draggableEl = this.$el.querySelector('.draggable-component');

    interact(draggableEl)
      .draggable({
        inertia: true,
        modifiers: [
          interact.modifiers.restrictRect({
            restriction: document.body,
          }),
        ],
        autoScroll: true,
      })
      .resizable({
        edges: { left: true, right: true, bottom: true, top: true },
        modifiers: [
          interact.modifiers.restrictSize({
            min: { width: 100, height: 100 },
            max: { width: 1000, height: 1000 },
          }),
        ],
      })
      .on('resizemove', (event: ResizeEvent) => {
        event.target.style.width = event.rect.width + 'px';
        event.target.style.height = event.rect.height + 'px';
      })
      .on('dragmove', (event: DragEvent) => {
        const target = event.target;
        const x =
          (parseFloat(target.getAttribute('data-x') ?? '0') || 0) + event.dx;
        const y =
          (parseFloat(target.getAttribute('data-y') ?? '0') || 0) + event.dy;

        target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

        target.setAttribute('data-x', x.toString());
        target.setAttribute('data-y', y.toString());
      });
  },
});
</script>

<style scoped>
.draggable-container {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
}

.draggable-component {
  width: 256px;
  height: 256px;
  border: 4px solid;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  user-select: none;
  cursor: grab;
  transform: translate(0, 0);
}

.draggable-component h4 {
  margin: 0;
  padding: 0;
}
</style>
