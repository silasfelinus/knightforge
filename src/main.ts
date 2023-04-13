// main.ts
import { createApp } from 'vue';
import router from './router';
import App from './App.vue';

// Create a new Vue app instance
const app = createApp(App);

// Set up a global error handler for the app
app.config.errorHandler = (err, vm, info) => {
  console.error('Captured in global errorHandler:', err);
  console.error('Error originated from component:', vm);
  console.error('Additional info:', info);
};
// Use the router and Pinia for state management
app.use(router);

// Mount the app to the DOM
app.mount('#app');
