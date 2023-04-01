<!-- ScreenWidget.vue -->

<script lang="ts">
import { defineComponent, computed, Ref, ref, watch, toRefs } from 'vue';
import { useAppStore, AppStore } from '../stores/app';
import { Side } from '../stores/types';
import ScreenCard from './ScreenCard.vue';

interface WidgetSettings {
  title: string;
}

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
    const appStore = useAppStore() as AppStore;
    const { side } = toRefs(props);

    const currentPreset = computed(() => {
      const screenKey = `${side.value}Screen`;
      return appStore[screenKey]?.preset;
    });

    const widgetTitle = computed(() => {
      const preset = currentPreset.value;
      const settings = appStore.widgetSettings(preset);
      return settings ? (settings as WidgetSettings).title : '';
    });

    const currentComponent: Ref<ReturnType<typeof defineComponent> | object> = ref({});
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
