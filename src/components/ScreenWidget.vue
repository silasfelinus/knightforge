<template>
  <div class="screen-widget" :class="[size, orientation]">
    <q-toolbar>
      <q-toolbar-title>Screen</q-toolbar-title>
      <RemoteWidget :side="side" />
    </q-toolbar>
    <component
      v-if="currentComponent.value"
      :is="currentComponent.value"
    ></component>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch, toRefs, Component } from 'vue';
import { useStore } from 'vuex';
import RemoteWidget from './RemoteWidget.vue';
import { Side } from '../store/types';

export default defineComponent({
  name: 'ScreenWidget',
  components: {
    RemoteWidget,
  },
  props: {
    side: {
      type: String as () => Side,
      default: '',
    },
    size: {
      type: String,
      default: '',
    },
    orientation: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const store = useStore();
    const { side } = toRefs(props);

    const currentPreset = computed(() => {
      return store.state[
        side.value === 'left'
          ? 'leftPreset'
          : side.value === 'main'
          ? 'mainPreset'
          : 'rightPreset'
      ];
    });

    const currentComponent = ref<Component | null>(null);

    watch(
      currentPreset,
      async (preset) => {
        if (!preset) {
          currentComponent.value = null;
          return;
        }

        // Dynamic import of the component based on the preset
        const component = await import(`./components/${preset}.vue`);
        currentComponent.value = component.default;
      },
      { immediate: true }
    );

    return {
      currentComponent,
    };
  },
});
</script>
