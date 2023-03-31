<template>
  <div class="screen-widget" :class="[size, orientation]">
    <q-card class="widget-card">
      <q-toolbar>
        <q-toolbar-title>Screen</q-toolbar-title>
        <RemoteWidget :side="side" />
      </q-toolbar>
      <q-card-section>
        <component :is="currentComponent || 'div'"></component>
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch, toRefs } from 'vue';
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
      const screenKey = `${side.value}Screen`;
      return store.state[screenKey]?.preset;
    });

    const currentComponent = ref(null);

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

<style scoped>
.screen-widget {
  display: flex;
  flex-direction: column;
  margin: 1rem;
}

.widget-card {
  flex: 1;
  display: flex;
  flex-direction: column;
}

q-card-section {
  flex: 1;
}
</style>
