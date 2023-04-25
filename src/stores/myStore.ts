import { defineStore } from 'pinia';

export const useMyStore = defineStore({
  id: 'myStore',
  state: () => ({
    message: 'Hello from Pinia store!',
  }),
});
