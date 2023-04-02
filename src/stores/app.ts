// app.ts
import { defineStore } from 'pinia';

interface ScreenCard {
  id: number;
  content: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

export const useAppStore = defineStore('app', {
  state: () => ({
    screenCards: [] as ScreenCard[],
    nextCardId: 1,
  }),
  getters: {
    getScreenCardById: (state) => (id: number) => {
      return state.screenCards.find((card) => card.id === id);
    },
  },
  actions: {
    addScreenCard(card: Omit<ScreenCard, 'id'>) {
      this.screenCards.push({ ...card, id: this.nextCardId });
      this.nextCardId += 1;
    },
    updateScreenCard(card: ScreenCard) {
      const index = this.screenCards.findIndex((c) => c.id === card.id);
      if (index !== -1) {
        this.screenCards[index] = card;
      }
    },
    removeScreenCard(id: number) {
      this.screenCards = this.screenCards.filter((card) => card.id !== id);
    },
  },
});
