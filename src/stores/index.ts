import { createStore } from 'vuex';
import { Preset, Side, State } from './types';

export default createStore<State>({
  state: {
    leftScreen: {
      preset: Preset.Default,
      visible: true,
    },
    mainScreen: {
      preset: Preset.Default,
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
      [Preset.UnderConstruction]: { title: 'Under Construction', bgColor: 'white' },
    },
    headerTitle: 'Wonderforge',
  },
  getters: {
    widgetSettings: (state) => (preset: Preset) => {
      return state.widgetSettings[preset];
    },
  },
  mutations: {
    changePreset(state, { side, preset }: { side: Side; preset: Preset }) {
      state[`${side}Screen`].preset = preset;
    },
    toggleVisibility(state, side: Side) {
      state[`${side}Screen`].visible = !state[`${side}Screen`].visible;
    },
  },
  actions: {
    changePreset({ commit }, { side, preset }: { side: Side; preset: Preset }) {
      commit('changePreset', { side, preset });
    },
    nextPreset({ state, dispatch }, side: Side) {
      const currentPreset = state[`${side}Screen`].preset;
      const presetValues: Preset[] = Object.values(Preset);
      const index = presetValues.indexOf(currentPreset);
      const nextPreset = presetValues[(index + 1) % presetValues.length];
      dispatch('changePreset', { side, preset: nextPreset });
    },
    toggleVisibility({ commit }, side: Side) {
      commit('toggleVisibility', side);
    },
    updateWidgetTitle(
      { state, commit },
      { preset, title }: { preset: Preset; title: string }
    ) {
      state.widgetSettings[preset].title = title;
      commit('widgetSettings', state.widgetSettings);
    },
    updateWidgetBgColor(
      { state, commit },
      { preset, bgColor }: { preset: Preset; bgColor: string }
    ) {
      state.widgetSettings[preset].bgColor = bgColor;
      commit('widgetSettings', state.widgetSettings);
    },
  },
});
