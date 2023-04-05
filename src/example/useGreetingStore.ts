import { defineStore } from 'pinia';
export const useGreetingStore = defineStore({
  id: 'greetingStore',
  state: () => ({ greetings: ['Hello, World!', 'Bonjour!', 'Hola!'] }),
  actions: {
    // Global call to get a random greeting
    randomGreeting(): string {
      const randomIndex = Math.floor(Math.random() * this.greetings.length);
      return this.greetings[randomIndex];
    },
  },
});
