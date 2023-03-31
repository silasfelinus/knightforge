<template>
  <div
    class="labspace-section"
    @dragover.prevent="handleDragOver"
    @drop="handleDrop"
  >
    <!-- Insert your Labspace content here -->
    <div
      v-for="(item, index) in labSpaceItems"
      :key="index"
      class="labspace-item"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface LabSpaceItem {
  name: string;
}

export default defineComponent({
  name: 'LabspaceWidget',
  props: {},
  setup() {
    const labSpaceItems = ref<Array<LabSpaceItem>>([]);

    function handleDrop(event: DragEvent) {
      event.preventDefault();
      const item: LabSpaceItem = JSON.parse(event.dataTransfer.getData('text'));
      labSpaceItems.value.push(item);
    }

    function handleDragOver(event: DragEvent) {
      event.preventDefault();
    }

    return {
      labSpaceItems,
      handleDrop,
      handleDragOver,
    };
  },
});
</script>

<style lang="scss">
.labspace-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 3px dashed $grey-5;
}

.labspace-item {
  background-color: $grey-2;
  border-radius: 6px;
  padding: 8px;
  margin: 4px;
  font-size: 14px;
  font-weight: 500;
  color: #000000;
}
</style>
