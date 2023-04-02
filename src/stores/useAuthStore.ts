import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    isLoggedIn: false,
  }),
  actions: {
    login(email: string, password: string) {
      // Here, you can implement an API call to your backend to authenticate the user.
      // For the demo, we'll just set the user to a hardcoded value.
      if (email === 'user@example.com' && password === 'password') {
        this.user = { email: 'user@example.com', id: 1 };
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
