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
import { defineComponent, computed, ref, watch, toRefs } from 'vue';
import { useStore } from 'vuex';
import RemoteWidget from './RemoteWidget.vue';

interface Props {
  side: Side;
  size: string;
  orientation: string;
}

export default defineComponent({
  name: 'ScreenWidget',
  components: {
    RemoteWidget,
  },
  props: {
    side: {
      type: String,
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
  setup(props: Props) {
    const store = useStore<State>();
    const { side } = toRefs(props);

    const currentPreset = computed<Preset>(() => {
      return store.state[
        side.value === 'left'
          ? 'leftPreset'
          : side.value === 'main'
          ? 'mainPreset'
          : 'rightPreset'
      ];
    });

    const currentComponent = ref<null | Vue.Component>(null);

    watch(
      currentPreset,
      async (preset: Preset) => {
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
