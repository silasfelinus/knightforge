// src/stores/useAppStore.ts
import { defineStore } from 'pinia';

interface User {
  email: string;
  id: number;
}

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
    user: null as User | null,
    isLoggedIn: false,
    nightMode: false,
    notifications: [] as string[],
    screenCards: [] as ScreenCard[],
    nextCardId: 1,
    selectedCardIds: new Set<number>(),
    stepHistory: [] as ScreenCard[][],
  }),
  getters: {
    // Get a screen card by its id
    getScreenCardById: (state) => (id: number) => {
      return state.screenCards.find((card) => card.id === id);
    },
  },
  actions: {
    // Log in the user
    login(email: string, password: string) {
      // Implement an API call to your backend to authenticate the user.
      // For the demo, we'll just set the user to a hardcoded value.
      if (email === 'acroguest@cafepurr.com' && password === 'password') {
        this.user = { email: 'acroguest@cafepurr.com', id: 1 };
        this.isLoggedIn = true;
        return true;
      } else {
        return false;
      }
    },
    // Log out the user
    logout() {
      this.user = null;
      this.isLoggedIn = false;
    },
    // Toggle night mode
    toggleNightMode() {
      this.nightMode = !this.nightMode;
    },
    // Add a new notification
    addNotification(notification: string) {
      this.notifications.push(notification);
    },
    // Remove a notification by its index
    removeNotification(index: number) {
      this.notifications.splice(index, 1);
    },
    // Add a new screen card
    addScreenCard(card: Omit<ScreenCard, 'id'>) {
      this.screenCards.push({ ...card, id: this.nextCardId });
      this.nextCardId += 1;
      this.saveStep();
    },
    // Update an existing screen card
    updateScreenCard(card: ScreenCard) {
      const index = this.screenCards.findIndex((c) => c.id === card.id);
      if (index !== -1) {
        this.screenCards[index] = card;
      }
    },
    // Remove a screen card by its id
    removeScreenCard(id: number) {
      this.screenCards = this.screenCards.filter((card) => card.id !== id);
    },
    // Select a card by its id
    selectCard(id: number) {
      this.selectedCardIds.add(id);
    },
    // Deselect a card by its id
    deselectCard(id: number) {
      this.selectedCardIds.delete(id);
    },
    // Remove all selected cards
    removeSelectedCards() {
      this.screenCards = this.screenCards.filter(
        (card) => !this.selectedCardIds.has(card.id)
      );
      this.selectedCardIds.clear();
      this.saveStep();
    },
    // Save the current step to the history
    saveStep() {
      this.stepHistory.push(JSON.parse(JSON.stringify(this.screenCards)));
    },
    // Undo the last action by restoring the previous step from the history
    undo() {
      if (this.stepHistory.length > 0) {
        this.screenCards = this.stepHistory.pop() || [];
      }
    },
  }
})
