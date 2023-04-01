import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';

const app = createApp(App);

// Replace the Vuex store with a Pinia store
app.use(createPinia());

app.mount('#app');
