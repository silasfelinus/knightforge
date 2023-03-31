<!-- src/components/SidebarWidget.vue -->
<template>
  <div class="sidebar-widget">
    <q-toolbar>
      <q-toolbar-title>Sidebar - {{ side }}</q-toolbar-title>
    </q-toolbar>
    <component :is="currentComponent"></component>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import ToolBox from './labspace/ToolBox.vue';
import PaintBox from './playspace/PaintBox.vue';
import TextInput from './labspace/TextInput.vue';
import DataUpload from './labspace/DataUpload.vue';
import CardManager from './cardspace/CardManager.vue';
import ChatWidget from './playspace/ChatWidget.vue';

export default defineComponent({
  name: 'SidebarWidget',
  components: {
    ChatWidget,
    ToolBox,
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
  },
  setup(props) {
    const store = useStore();

    const preset = computed(() => {
  if (props.side === 'left') return store.getters.leftPreset;
  if (props.side === 'right') return store.getters.rightPreset;
  return null;
});

    const currentComponent = computed(() => {
      const componentMap = {
        ChatWidget,
        ToolBox,
        PaintBox,
        TextInput,
        DataUpload,
        CardManager,
      };

      return componentMap[preset.value] || null;
    });

    return { preset, currentComponent };
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
</style>
