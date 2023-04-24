<template>
  <div class="magic-window-container">
    <div
      class="magic-window"
      :style="{ backgroundColor: color, borderColor: borderColor }"
    ></div>
    <div class="background-layer">
      <ButterflyHorde :count="50" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import interact from 'interactjs';
import { DragEvent, ResizeEvent } from '@interactjs/types';
import ButterflyHorde from './ButterflyHorde.vue';

export default defineComponent({
  name: 'MagicWindow',
  components: {
    ButterflyHorde,
  },
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
    const draggableEl = this.$el.querySelector('.magic-window');

    interact(draggableEl)
      .draggable({
        inertia: true,
        modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent',
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
.magic-window-container {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  overflow: hidden;
}

.magic-window {
  width: 256px;
  height: 256px;
  border: 4px solid;
  border-radius: 8px;
  position: absolute;
  user-select: none;
  cursor: grab;
  transform: translate(0, 0);
  pointer-events: auto;
  z-index: 1;
  opacity: 0.7;
  overflow: hidden;
  background-clip: padding-box;
}

.magic-window-container h4 {
  position: absolute;
  z-index: 2;
  margin: 0;
  padding: 0;
}

.background-layer {
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  z-index: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 214, 10, 1) 0%,
    rgba(255, 214, 10, 0.7) 15%,
    rgba(29, 233, 182, 0.7) 60%,
    rgba(29, 233, 182, 1) 100%
  );
}
</style>
