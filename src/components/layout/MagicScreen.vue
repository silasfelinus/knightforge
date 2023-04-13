<!-- src/components/MagicScreen.vue -->
<template>
  <div class="magic-screen" ref="magicScreen">
    <!-- Your content here -->
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import interact from 'interactjs';

export default defineComponent({
  setup() {
    const magicScreen = ref<HTMLElement | null>(null);

    onMounted(() => {
      if (magicScreen.value) {
        interact(magicScreen.value)
          .draggable({
            // Configure interactjs options for dragging here
          })
          .resizable({
            // Enable resize in both directions
            edges: { left: true, right: true, bottom: true, top: true },

            // Configure interactjs options for resizing here
          })
          .on('resizemove', (event) => {
            const target = event.target;
            const x = parseFloat(target.getAttribute('data-x')) || 0;
            const y = parseFloat(target.getAttribute('data-y')) || 0;

            // Update the element's dimensions
            target.style.width = event.rect.width + 'px';
            target.style.height = event.rect.height + 'px';

            // Translate when resizing from top or left edges
            target.style.transform = `translate(${x}px, ${y}px)`;

            target.setAttribute('data-x', x + event.deltaRect.left);
            target.setAttribute('data-y', y + event.deltaRect.top);
          });
      }
    });

    return { magicScreen };
  },
});
</script>

<style lang="scss" scoped>
.magic-screen {
  // Your styles here, e.g., set initial dimensions
  width: 200px;
  height: 200px;
}
</style>
