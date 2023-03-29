<template>
  <q-layout view="hHh lpR fFf">
    <q-header>
      <q-toolbar>
        <q-btn flat dense round icon="menu" @click="toggleSidebar" />
        <q-toolbar-title>KnightForge Wonderlab</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-list>
        <!-- Insert your navigation items here -->
      </q-list>
    </q-drawer>

    <q-page-container>
      <q-page class="flex flex-center">
        <div class="toolshed-section">
          <!-- Insert your ToolShed content here -->
        </div>
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
        <div class="chat-window-section">
          <!-- Insert your ChatWindow content here -->
        </div>
      </q-page>
    </q-page-container>

    <q-footer>
      <q-toolbar>
        <q-toolbar-title>Footer</q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    const leftDrawerOpen = ref(true);
    const labSpaceItems = ref<Array<any>>([]);

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

    function handleDragStart(event: DragEvent, item: any) {
      event.dataTransfer.setData('text/plain', JSON.stringify(item));
    }

    return {
      leftDrawerOpen,
      toggleSidebar,
      labSpaceItems,
      handleDrop,
      handleDragOver,
      handleDragStart,
    };
  },
});
</script>

<style lang="scss">
@import './src/css/quasar.variables.scss';

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
