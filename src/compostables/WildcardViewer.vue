<template>
  <div class="draggable-container">
    <div
      ref="draggableEl"
      class="draggable-component"
      :style="{ backgroundColor: color, borderColor: borderColor }"
    >
      <select v-model="selectedFile" @change="fetchRandomItem">
        <option value="" disabled>Select a list</option>
        <option v-for="file in files" :key="file" :value="file">
          {{ file }}
        </option>
      </select>
      <p v-if="randomItem">Random item: {{ randomItem }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import interact from 'interactjs';
import { DragEvent, ResizeEvent } from '@interactjs/types';
import useWildcard from '@/composables/useWildcard';
import useWildcardFiles from '@/composables/useWildcardFiles';

const { files, fetchFiles } = useWildcardFiles();
const { randomItem, getRandomItem } = useWildcard();
const selectedFile = ref('');
const draggableEl = ref<HTMLElement | null>(null);

async function fetchRandomItem() {
  if (selectedFile.value) {
    await getRandomItem(selectedFile.value);
  }
}

fetchFiles();

const color = ref('#' + Math.floor(Math.random() * 16777215).toString(16));
const borderColor = ref(
  '#' + Math.floor(Math.random() * 16777215).toString(16)
);

onMounted(() => {
  if (draggableEl.value) {
    interact(draggableEl.value)
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
  }
});
</script>
<style scoped>
.draggable-container {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  pointer-events: none;
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
  pointer-events: auto;
}

.draggable-component h4 {
  margin: 0;
  padding: 0;
}
</style>
