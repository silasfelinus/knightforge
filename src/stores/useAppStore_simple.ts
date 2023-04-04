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

interface ComponentVisibility {
  [key: string]: boolean;
}

export const useAppStore = defineStore('app', {
  state: () => ({
    user: null as User | null,
    isLoggedIn: false,
    nightMode: false,
    screenCards: [] as ScreenCard[],
    nextCardId: 1,
    selectedCardIds: new Set<number>(),
    stepHistory: [] as ScreenCard[][],
    componentVisibility: {
      leftSidebar: true,
      rightSidebar: true,
      headerBar: true,
      mainWindow: true,
      footerBar: true,
    } as ComponentVisibility,
    gridWidth: 12, // Grid width in cells
    gridHeight: 12, // Grid height in cells
    gridCellSize: 50, // Grid cell size in pixels
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
        this.screenCards = [
          ...this.screenCards.slice(0, index),
          card,
          ...this.screenCards.slice(index + 1),
        ];
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
    // Toggle component visibility
    toggleComponentVisibility(componentName: string) {
      if (componentName in this.componentVisibility) {
        this.componentVisibility[componentName] =
          !this.componentVisibility[componentName];
      } else {
        console.error(
          `Component "${componentName}" not found in componentVisibility.`
        );
      }
    },
    // Set the grid width
    setGridWidth(width: number) {
      this.gridWidth = width;
    },
    // Set the grid height
    setGridHeight(height: number) {
      this.gridHeight = height;
    },
    // Set the grid cell size
    setGridCellSize(size: number) {
      this.gridCellSize = size;
    },
  },
});
