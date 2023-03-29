<template>
  <q-layout view="hHh lpR fFf">
    <HeaderWidget @toggle-sidebar="toggleSidebar" />

    <!-- ... Rest of the code remains unchanged ... -->
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import HeaderWidget from './HeaderWidget.vue'; // Make sure this import path is correct

export default defineComponent({
  name: 'App',
  components: {
    HeaderWidget,
  },
  setup() {
    const leftDrawerOpen = ref(true);
    const labSpaceItems = ref<{ name: string }[]>([]);

    function toggleSidebar() {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    }

    function handleDrop(event: DragEvent) {
      event.preventDefault();
      const item = JSON.parse(event.dataTransfer.getData('text'));
      labSpaceItems.value.push(item);
    }

    function handleDragOver(event: DragEvent) {
      event.preventDefault();
    }

    function handleDragStart(event: DragEvent, item: { name: string }) {
      event.dataTransfer.setData('text/plain', JSON.stringify(item));
    }

    return {
      leftDrawerOpen,
      toggleSidebar,
      labSpaceItems,
      handleDrop,
      handleDragOver,
      handleDragStart,
      HeaderWidget,
    };
  },
});
</script>

<style lang="scss">
@import './css/quasar.variables.scss';

.q-layout {
  height: 100vh;
  background-color: $primary;
}

.q-header,
.q-footer {
  background-color: $secondary;
  color: #e7d4d4;
}

.q-toolbar-title {
  font-weight: bold;
}

.q-drawer {
  background-color: $dark;
  color: #e7d4d4;
}

.q-list {
  // Add your custom styles for the navigation items here
}

.toolshed-section,
.labspace-section,
.chat-window-section {
  flex: 1;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  margin: 5% 1.5%;
  position: relative;
  overflow: hidden;
}

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

.chat-window-section {
  // Add your custom styles for the chat window here
}
</style>
