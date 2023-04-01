import { defineStore } from 'pinia';
import { Preset, Side, State, WidgetSettings, AppStore } from './types';

const generateWidgetSettings = (): Record<Preset, WidgetSettings> => {
  const presets = Object.values(Preset);
  return presets.reduce((acc, preset) => {
    acc[preset] = { title: preset, bgColor: 'white' };
    return acc;
  }, {} as Record<Preset, WidgetSettings>);
};

export const useAppStore = defineStore({
  id: 'app',
  state: (): State => ({
    leftScreen: {
      preset: Preset.Default,
      visible: true,
    },
    mainScreen: {
      preset: Preset.Default,
      visible: true,
    },
    rightScreen: {
      preset: Preset.Default,
      visible: true,
    },
    widgetSettings: generateWidgetSettings(),
    headerTitle: 'Wonderforge',
  }),
  getters: {
    widgetSettings: (state) => (preset: Preset) => {
      return state.widgetSettings[preset];
    },
  },
  actions: {
    changePreset({ side, preset }: { side: Side; preset: Preset }) {
      this[`${side}Screen`].preset = preset;
    },
    toggleVisibility(side: Side) {
      this[`${side}Screen`].visible = !this[`${side}Screen`].visible;
    },
    nextPreset(side: Side) {
      const currentPreset = this[`${side}Screen`].preset;
      const presetValues: Preset[] = Object.values(Preset);
      const index = presetValues.indexOf(currentPreset);
      const nextPreset = presetValues[(index + 1) % presetValues.length];
      this.changePreset({ side, preset: nextPreset });
    },
    updateWidgetTitle({ preset, title }: { preset: Preset; title: string }) {
      this.widgetSettings[preset].title = title;
    },
    updateWidgetBgColor({
      preset,
      bgColor,
    }: {
      preset: Preset;
      bgColor: string;
    }) {
      this.widgetSettings[preset].bgColor = bgColor;
    },
  },
});
