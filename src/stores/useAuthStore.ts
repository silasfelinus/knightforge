import { defineStore } from 'pinia';

interface User {
  email: string;
  id: number;
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
    isLoggedIn: false,
  }),
  actions: {
    login(email: string, password: string) {
      // Here, you can implement an API call to your backend to authenticate the user.
      // For the demo, we'll just set the user to a hardcoded value.
      if (email === 'acroguest@cafepurr.com' && password === 'password') {
        this.user = { email: 'acroguest@cafepurr.com', id: 1 };
        this.isLoggedIn = true;
        return true;
      } else {
        return false;
      }
    },
    logout() {
      this.user = null;
      this.isLoggedIn = false;
    },
  },
});
