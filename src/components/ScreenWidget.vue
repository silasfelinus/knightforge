<!-- src/components/ScreenWidget.vue -->
<template>
  <div class="screen-widget">
    <q-toolbar>
      <q-toolbar-title>Screen - {{ side }}</q-toolbar-title>
      <RemoteWidget :side="side" />
    </q-toolbar>
    <component :is="currentComponent"></component>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import ChatWidget from './playspace/ChatWidget.vue';
import ToolChest from './wonderforge/ToolChest.vue';
import PaintBox from './playspace/PaintBox.vue';
import TextInput from './labspace/TextInput.vue';
import DataUpload from './labspace/DataUpload.vue';
import CardManager from './labspace/CardManager.vue';
import RemoteWidget from './RemoteWidget.vue';

export default defineComponent({
  name: 'ScreenWidget',
  components: {
    ChatWidget,
    ToolChest,
    PaintBox,
    TextInput,
    DataUpload,
    CardManager,
    RemoteWidget,
  },
  props: {
    side: {
      type: String,
      required: true,
    },
  },
  setup() {
    const store = useStore();

    const currentComponent = computed(() => {
      const preset =
        store.state[
          side === 'left'
            ? 'leftPreset'
            : side === 'main'
            ? 'mainPreset'
            : 'rightPreset'
        ];
      switch (preset) {
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
    });

    return {
      currentComponent,
    };
  },
});
</script>

<style scoped>
.screen-widget {
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
