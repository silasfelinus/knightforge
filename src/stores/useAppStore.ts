// src/stores/useAppStore.ts
import { defineStore } from 'pinia';
export const useAppStore = defineStore('app', {
  state: () => ({
    nightMode: false,
    showButterflyEffect: false,
  }),
  getters: {},
  actions: {
    toggleButterflyEffect() {
      this.showButterflyEffect = !this.showButterflyEffect;
    },
  },
});
