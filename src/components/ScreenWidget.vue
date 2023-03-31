<template>
  <div class="screen-widget">
    <ScreenCard :widgetTitle="widgetTitle">
      <component :is="currentComponent" />
    </ScreenCard>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, toRefs, ref, watch } from 'vue';
import { useStore } from 'vuex';
import { Side } from '../store/types';
import ScreenCard from './ScreenCard.vue';

export default defineComponent({
  name: 'ScreenWidget',
  components: {
    ScreenCard,
  },
  props: {
    side: {
      type: String as () => Side,
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

    const widgetTitle = computed(() => {
      const preset = currentPreset.value;
      return store.getters.widgetSettings(preset)?.title;
    });

    const currentComponent = ref({});
    watch(currentPreset, (preset) => {
      import(`../pages/${preset}.vue`)
        .then((module) => {
          currentComponent.value = module.default;
        })
        .catch(() => {
          import('../pages/UnderConstruction.vue').then((module) => {
            currentComponent.value = module.default;
          });
        });
    });

    return {
      widgetTitle,
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
</style>
