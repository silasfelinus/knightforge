<template>
  <div>
    <h1>Admin Page</h1>
    <label for="folder-select">Select Folder:</label>
    <select id="folder-select" v-model="selectedFolder">
      <option value="WIP">WIP</option>
      <option value="Layout">Layout</option>
      <option value="gamescreens">Game Screens</option>
      <option value="butterfly">Butterfly</option>
      <option value="snail">Snail</option>
    </select>

    <label for="regex-input">Regex:</label>
    <input id="regex-input" type="text" v-model="inputRegex" />

    <div class="homepages-container">
      <div v-for="(componentData, index) in filteredComponents" :key="index">
        <h2>{{ componentData.name }}</h2>
        <ComponentFrame :component="componentData.component">
          <p>Preview not available</p>
        </ComponentFrame>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed, watch } from 'vue';
import ComponentFrame from './ComponentFrame.vue';
interface ComponentModule {
  default: ReturnType<typeof defineComponent>;
}

declare global {
  interface NodeRequire {
    context: (
      directory: string,
      useSubdirectories?: boolean,
      regExp?: RegExp
    ) => {
      keys: () => string[];
      (id: string): ComponentModule;
    };
  }
}

interface LoadedComponentData {
  name: string;
  component: ReturnType<typeof defineComponent>;
}

export default defineComponent({
  components: {
    ComponentFrame,
  },
  async setup() {
    const selectedFolder = ref('WIP');
    const inputRegex = ref('HomePage');

    const loadedComponents = ref<LoadedComponentData[]>([]);

    const filteredComponents = computed(() => {
      return loadedComponents.value.filter((componentData) =>
        componentData.name.match(new RegExp(inputRegex.value))
      );
    });

    watch(
      selectedFolder,
      async (folder) => {
        const context = require.context(`../${folder}`, false, /\.vue$/);

        loadedComponents.value = await Promise.all(
          context.keys().map(async (key) => {
            const name = key.slice(2, -4);
            const componentModule = await context(key);
            return { name, component: componentModule.default };
          })
        );
      },
      { immediate: true }
    );

    return {
      selectedFolder,
      inputRegex,
      filteredComponents,
    };
  },
});
</script>
<style scoped>
.homepages-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
}

.homepages-container > div {
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}
</style>
