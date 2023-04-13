// src/stores/useAppStore.ts
import { defineStore } from 'pinia';
import { GameScreen, Photoset } from '@/stores/types';

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    gameScreens: [] as GameScreen[],
    selectedPhotoset: 'chest',
    photosets: [
      {
        id: 1,
        name: 'chest',
        src: '@/assets/photosets/chest',
        prefix: 'chest',
      },
      {
        id: 2,
        name: 'splash',
        src: '@/assets/photosets/splash',
        prefix: 'splash',
      },
    ] as Photoset[],
  }),
  actions: {
    addGameScreen() {
      const newGameScreen: GameScreen = {
        id: Date.now(),
        photoset: this.selectedPhotoset,
      };
      this.gameScreens.push(newGameScreen);
    },
    setSelectedPhotoset(value: string) {
      this.selectedPhotoset = value;
    },
  },
});
