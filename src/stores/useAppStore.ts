// src/stores/useAppStore.ts
import { defineStore } from 'pinia';
export const useAppStore = defineStore('app', {
  state: () => ({
    user: null as User | null,
    isLoggedIn: false,
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
