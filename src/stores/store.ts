// src/stores/store.ts
import { defineStore } from 'pinia';

export const useMyStore = defineStore({
  id: 'myStore',

  state: () => ({
    count: 0,
  }),

  getters: {
    doubleCount(): number {
      // Add the return type annotation here
      return this.count * 2;
    },
  },

  actions: {
    increment() {
      this.count++;
    },

    decrement() {
      this.count--;
    },

    reset() {
      this.count = 0;
    },
  },
});
