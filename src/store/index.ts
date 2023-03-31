// src/store/index.ts
import { createStore } from 'vuex';

const presetOptions = [
  'TextInput',
  'SplashScreen',
  'ChatWidget',
  'ChatWidget',
  'SplashWidget',
  'Lab',
  'ChatGPT',
  'Paint',
  'Playspace',
  'Settings',
  /* Add more presets here */
];

function findNextPreset(currentPreset) {
  const index = presetOptions.indexOf(currentPreset);
  return presetOptions[(index + 1) % presetOptions.length];
}

export default createStore({
  state: {
    leftPreset: 'TextInput',
    mainPreset: 'SplashScreen',
    rightPreset: 'ChatWidget',
    leftVisible: true,
    mainVisible: true,
    rightVisible: true,
  },
  mutations: {
    changePreset(state, { side, preset }) {
      if (side === 'left') {
        state.leftPreset = preset;
      } else if (side === 'main') {
        state.mainPreset = preset;
      } else if (side === 'right') {
        state.rightPreset = preset;
      }
    },
    nextPreset(state, side) {
      if (side === 'left') {
        state.leftPreset = findNextPreset(state.leftPreset);
      } else if (side === 'main') {
        state.mainPreset = findNextPreset(state.mainPreset);
      } else if (side === 'right') {
        state.rightPreset = findNextPreset(state.rightPreset);
      }
    },
    toggleVisibility(state, side) {
      if (side === 'left') {
        state.leftVisible = !state.leftVisible;
      } else if (side === 'main') {
        state.mainVisible = !state.mainVisible;
      } else if (side === 'right') {
        state.rightVisible = !state.rightVisible;
      }
    },
  },
});
