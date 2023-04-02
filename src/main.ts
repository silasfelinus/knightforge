import { createApp } from 'vue';
import router from './router';
import App from '@/App.vue';
import { createPinia } from 'pinia';

const app = createApp(App);

app.config.errorHandler = (err, _vm, _info) => {
  console.error('Captured in global errorHandler:', err);
  // You can also send the error to a logging service or display a user-friendly message
};

app.use(router);
app.use(createPinia());
app.mount('#app');
