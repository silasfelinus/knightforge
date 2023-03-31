import { createStore } from 'vuex';
import { Preset, Side, State } from './types';

const presetValues: Preset[] = Object.values(Preset);

function findNextPreset(currentPreset: Preset): Preset {
  const index = presetValues.indexOf(currentPreset);
  return presetValues[(index + 1) % presetValues.length];
}

function changePreset(state: State, side: Side, preset: Preset) {
  state[`${side}Screen`].preset = preset;
}

function toggleVisibility(state: State, side: Side) {
  state[`${side}Screen`].visible = !state[`${side}Screen`].visible;
}

export default createStore<State>({
  state: {
    leftScreen: {
      preset: Preset.TextInput,
      visible: true,
    },
    mainScreen: {
      preset: Preset.SplashScreen,
      visible: true,
    },
    rightScreen: {
      preset: Preset.ChatWidget,
      visible: true,
    },
    widgetSettings: {
      [Preset.TextInput]: { title: 'Text Input', bgColor: 'white' },
      [Preset.SplashScreen]: { title: 'Splash Screen', bgColor: 'white' },
      [Preset.ChatWidget]: { title: 'Chat Widget', bgColor: 'white' },
      [Preset.SplashWidget]: { title: 'Splash Widget', bgColor: 'white' },
      [Preset.Lab]: { title: 'Lab', bgColor: 'white' },
      [Preset.ChatGPT]: { title: 'ChatGPT', bgColor: 'white' },
      [Preset.Paint]: { title: 'Paint', bgColor: 'white' },
      [Preset.Playspace]: { title: 'Playspace', bgColor: 'white' },
      [Preset.Settings]: { title: 'Settings', bgColor: 'white' },
      [Preset.Default]: { title: 'Default', bgColor: 'white' },
      // Add more preset settings here
    },
  },
  getters: {
    widgetSettings: (state) => (preset: Preset) => {
      return state.widgetSettings[preset];
    },
  },
  mutations: {
    changePreset(state, { side, preset }: { side: Side; preset: Preset }) {
      changePreset(state, side, preset);
    },
    nextPreset(state, side: Side) {
      const currentPreset = state[`${side}Screen`].preset;
      const nextPreset = findNextPreset(currentPreset);
      changePreset(state, side, nextPreset);
    },
    toggleVisibility(state, side: Side) {
      toggleVisibility(state, side);
    },
    updateWidgetTitle(state, { preset, title }: { preset: Preset; title: string }) {
      state.widgetSettings[preset].title = title;
    },
    updateWidgetBgColor(state, { preset, bgColor }: { preset: Preset; bgColor: string }) {
      state.widgetSettings[preset].bgColor = bgColor;
    },
  },
  actions: {
    updateWidgetTitle({ commit }, { preset, title }) {
      commit('updateWidgetTitle', { preset, title });
    },
    updateWidgetBgColor({ commit }, { preset, bgColor }) {
      commit('updateWidgetBgColor', { preset, bgColor });
    },
  },
});
