import { computed } from 'vue';
import { useStore } from 'vuex';
import { Side, Preset } from '../stores/types';

export default function useRemoteWidget() {
  const store = useStore();

  const screens = computed(() => [
    { name: 'Left Sidebar', side: 'left' as Side },
    { name: 'Main Widget', side: 'main' as Side },
    { name: 'Right Sidebar', side: 'right' as Side },
  ]);

  const presetOptions = computed(() => Object.values(Preset));

  const selectedPresets = computed(() => [
    store.state.leftScreen.preset,
    store.state.mainScreen.preset,
    store.state.rightScreen.preset,
  ]);

  function changePreset(side: Side, preset: Preset) {
    store.commit('changePreset', { side, preset });
  }

  function nextPreset(side: Side) {
    store.dispatch('nextPreset', side);
  }

  function toggleVisibility(side: Side) {
    store.dispatch('toggleVisibility', side);
  }

  return {
    screens,
    presetOptions,
    selectedPresets,
    changePreset,
    nextPreset,
    toggleVisibility,
  };
}
