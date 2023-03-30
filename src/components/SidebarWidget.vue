<!-- SidebarWidget.vue -->
<template>
  <div class="sidebar-widget">
    <q-toolbar>
      <q-toolbar-title>Sidebar - {{ side }}</q-toolbar-title>
    </q-toolbar>
    <component :is="currentComponent"></component>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ChatWidget from './ChatWidget.vue';
import ToolChest from './ToolChest.vue';
import PaintBox from './PaintBox.vue';
import TextInput from './TextInput.vue';
import DataUpload from './DataUpload.vue';
import CardManager from './CardManager.vue';

export default defineComponent({
  name: 'SidebarWidget',
  components: {
    ChatWidget,
    ToolChest,
    PaintBox,
    TextInput,
    DataUpload,
    CardManager,
  },
  props: {
    side: {
      type: String,
      required: true,
    },
    preset: {
      type: String,
      required: true,
    },
  },
  computed: {
    currentComponent() {
      switch (this.preset) {
        case 'preset1':
          return ChatWidget;
        case 'preset2':
          return ToolChest;
        case 'preset3':
          return PaintBox;
        case 'preset4':
          return TextInput;
        case 'preset5':
          return DataUpload;
        case 'preset6':
          return CardManager;
        default:
          return null;
      }
    },
  },
});
</script>

<style scoped>
.sidebar-widget {
  height: 100%;
  padding: 16px;
}
</style>
