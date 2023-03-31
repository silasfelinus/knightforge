<template>
  <div class="screen-widget" :class="[size, orientation]">
    <q-toolbar>
      <q-toolbar-title>Screen</q-toolbar-title>
      <RemoteWidget :side="side" />
    </q-toolbar>
    <component :is="currentComponent?.value || 'div'"></component>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, toRefs } from 'vue';
import { useStore } from 'vuex';
import { Side } from '../store/types';

export default defineComponent({
  name: 'ScreenWidget',
  props: {
    side: {
      type: String as () => Side,
      default: '',
    },
  },
  setup(props) {
    const store = useStore();
    const { side } = toRefs(props);

    const screen = computed(() => store.state[`${side.value}Screen`]);
    const preset = computed(() => screen.value.preset);
    const visible = computed(() => screen.value.visible);

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
      side: side.value,
      preset,
      visible,
      presetComponentMap,
    };
  },
});
</script>
