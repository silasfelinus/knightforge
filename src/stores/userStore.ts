// src/stores/userStore.ts
import { defineStore } from 'pinia';

interface UserState {
  name: string;
  startPage: string;
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    name: '',
    startPage: '',
  }),

  getters: {
    getName(state): string {
      return state.name;
    },
    getStartPage(state): string {
      return state.startPage;
    },
  },

  actions: {
    setName(newName: string) {
      this.name = newName;
    },

    setStartPage(newStartPage: string) {
      this.startPage = newStartPage;
    },

    async fetchUserData() {
      const response = await fetch('http://localhost:3000/userData');
      if (!response.ok) {
        throw new Error(`Error fetching user data: ${response.statusText}`);
      }
      const data = await response.json();

      this.setName(data.name);
      this.setStartPage(data.startPage);
    },
  },
});
