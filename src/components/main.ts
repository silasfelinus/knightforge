import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router/index'; // Import the router instance, not the routes
import { createPinia } from 'pinia';

const app = createApp(App);

// Use the router
app.use(router);

// Use the Pinia store
app.use(createPinia());

app.mount('#app');
