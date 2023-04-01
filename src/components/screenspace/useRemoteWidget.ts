import { computed } from 'vue';
import { useAppStore } from '../stores/app';
import { Side, Preset } from '../stores/types';

export default function useRemoteWidget() {
  const appStore = useAppStore();

  const screens = computed(() => [
    { name: 'Left Sidebar', side: 'left' as Side },
    { name: 'Main Widget', side: 'main' as Side },
    { name: 'Right Sidebar', side: 'right' as Side },
  ]);

  const presetOptions = computed(() => Object.values(Preset));

  const selectedPresets = computed(() => [
    appStore.leftScreen.preset,
    appStore.mainScreen.preset,
    appStore.rightScreen.preset,
  ]);

  function changePreset(side: Side, preset: Preset) {
    appStore.changePreset({ side, preset });
  }

  function nextPreset(side: Side) {
    appStore.nextPreset(side);
  }

  function toggleVisibility(side: Side) {
    appStore.toggleVisibility(side);
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
