import { createApp } from 'vue';
import router from './router';
import App from '/App.vue';
import { createPinia } from 'pinia';

// Create a new Vue app instance
const app = createApp(App);

// Set up a global error handler for the app
app.config.errorHandler = (err, _vm, _info) => {
  console.error('Captured in global errorHandler:', err);
};

// Use the router and Pinia for state management
app.use(router);
app.use(createPinia());

// Mount the app to the DOM
app.mount('#app');
