import { createStore } from 'vuex';

const presetOptions = [
  'TextInput',
  'SplashScreen',
  'ChatWidget',
  'SplashWidget',
  'Lab',
  'ChatGPT',
  'Paint',
  'Playspace',
  'Settings',
  'Default',
  /* Add more presets here */
];

function findNextPreset(currentPreset) {
  const index = presetOptions.indexOf(currentPreset);
  return presetOptions[(index + 1) % presetOptions.length];
}

function changePreset(state, side, preset) {
  if (side === 'left') {
    state.leftPreset = preset;
  } else if (side === 'main') {
    state.mainPreset = preset;
  } else if (side === 'right') {
    state.rightPreset = preset;
  }
}

function toggleVisibility(state, side) {
  if (side === 'left') {
    state.leftVisible = !state.leftVisible;
  } else if (side === 'main') {
    state.mainVisible = !state.mainVisible;
  } else if (side === 'right') {
    state.rightVisible = !state.rightVisible;
  }
}

export default createStore({
  state: {
    leftPreset: 'TextInput',
    mainPreset: 'SplashScreen',
    rightPreset: 'ChatWidget',
    leftVisible: true,
    mainVisible: true,
    rightVisible: true,
    widgetSettings: {
      TextInput: { title: 'Text Input', bgColor: 'white' },
      SplashScreen: { title: 'Splash Screen', bgColor: 'white' },
      ChatWidget: { title: 'Chat Widget', bgColor: 'white' },
      SplashWidget: { title: 'Splash Widget', bgColor: 'white' },
      Lab: { title: 'Lab', bgColor: 'white' },
      ChatGPT: { title: 'ChatGPT', bgColor: 'white' },
      Paint: { title: 'Paint', bgColor: 'white' },
      Playspace: { title: 'Playspace', bgColor: 'white' },
      Settings: { title: 'Settings', bgColor: 'white' },
      Default: { title: 'Default', bgColor: 'white' },
      // Add more preset settings here
    },
  },
  getters: {
    widgetSettings: (state) => (preset:string) => {
      return state.widgetSettings[preset];
    },
  },
  mutations: {
    changePreset(state, { side, preset }) {
      changePreset(state, side, preset);
    },
    nextPreset(state, side) {
      const nextPreset = findNextPreset(
        side === 'left'
          ? state.leftPreset
          : side === 'main'
          ? state.mainPreset
          : state.rightPreset
      );
      changePreset(state, side, nextPreset);
    },
    toggleVisibility(state, side) {
      toggleVisibility(state, side);
    },
    updateWidgetTitle(state, { preset, title }) {
      state.widgetSettings[preset].title = title;
    },
    updateWidgetBgColor(state, { preset, bgColor }) {
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
