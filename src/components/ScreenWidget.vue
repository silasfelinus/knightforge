<template>
  <div v-if="visible" :class="['screen-widget', side]">
    <component :is="presetComponentMap[preset]" />
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

    const presetComponentMap = {
      // Add your preset components here, e.g.
      // 'Preset.TextInput': TextInputComponent,
      // 'Preset.SplashScreen': SplashScreenComponent,
      // ...
    };

    return {
      preset,
      visible,
      presetComponentMap,
    };
  },
});
</script>
