// src/stores/useGameScreens.ts
import { GameScreen } from '@/stores/types';

export const gameScreens: [] as GameScreen[],
    selectedPhotoset: 'chest',
    photosets: [
      {
        id: '1',
        name: 'chest',
        src: require('@/assets/photosets/chest'),
        prefix: 'chest',
      },
      {
        id: '2',
        name: 'splash',
        src: require('@/assets/photosets/splash'),
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
