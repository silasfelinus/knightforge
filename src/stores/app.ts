import { defineStore } from 'pinia';
import { auth } from '@/firebase';

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
    selectedCardIds: new Set<number>(),
    stepHistory: [] as ScreenCard[][],
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
      this.saveStep();
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
    selectCard(id: number) {
      this.selectedCardIds.add(id);
    },
    deselectCard(id: number) {
      this.selectedCardIds.delete(id);
    },
    removeSelectedCards() {
      this.screenCards = this.screenCards.filter(
        (card) => !this.selectedCardIds.has(card.id)
      );
      this.selectedCardIds.clear();
      this.saveStep();
    },
    saveStep() {
      this.stepHistory.push(JSON.parse(JSON.stringify(this.screenCards)));
    },
    undo() {
      if (this.stepHistory.length > 0) {
        this.screenCards = this.stepHistory.pop() || [];
      }
    },
  },
});
