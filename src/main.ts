// main.ts
import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './router';

// Create a new Vue app instance
const app = createApp(App);

// Set up a global error handler for the app
app.config.errorHandler = (err, vm, info) => {
  console.error('Captured in global errorHandler:', err);
  console.error('Error originated from component:', vm);
  console.error('Additional info:', info);
};

const pinia = createPinia();
app.use(pinia);
// Use the router, Pinia for state management, and Quasar
app.use(router);

// Mount the app to the DOM
app.mount('#app');
