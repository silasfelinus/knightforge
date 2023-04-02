import { createApp } from 'vue';
import App from '@/pages/Splash.vue';
import router from './router';
import { createPinia } from 'pinia';

const app = createApp(App);

app.config.errorHandler = (err, vm, info) => {
  console.error('Captured in global errorHandler:', err);
  // You can also send the error to a logging service or display a user-friendly message
};

app.use(router);
app.use(createPinia());
app.mount('#app');
