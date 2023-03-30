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
import ChatWidget from './chat/ChatWidget.vue';
import ToolChest from './lab/ToolChest.vue';
import PaintBox from './paint/PaintBox.vue';
import TextInput from './lab/TextInput.vue';
import DataUpload from './lab/DataUpload.vue';
import CardManager from './cards/CardManager.vue';

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
        case 'ChatWidget':
          return ChatWidget;
        case 'ToolChest':
          return ToolChest;
        case 'PaintBox':
          return PaintBox;
        case 'TextInput':
          return TextInput;
        case 'DataUpload':
          return DataUpload;
        case 'CardManager':
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
  display: flex;
  flex-direction: column;
}

q-toolbar {
  background-color: var(--q-color-primary);
  color: var(--q-color-primary-contrast);
}

/* You can customize the styling for each preset component below */
.chat-widget {
  /* Add styling for the ChatWidget component */
}

.tool-chest {
  /* Add styling for the ToolChest component */
}

.paint-box {
  /* Add styling for the PaintBox component */
}

.text-input {
  /* Add styling for the TextInput component */
}

.data-upload {
  /* Add styling for the DataUpload component */
}

.card-manager {
  /* Add styling for the CardManager component */
}
</style>
