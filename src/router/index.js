import { createRouter, createWebHashHistory } from 'vue-router';

// Import your components here
import MainWidget from '/src/components/MainWidget.vue';
import CardMat from '/src/components/CardMat.vue';

// Define your routes
const routes = [
  {
    path: '/',
    name: 'Main Widget',
    component: Mainwidget,
  },
  {
    path: '/cards',
    name: 'Card Mat',
    component: CardMat,
  },
  // Add more routes as needed
];

// Create the router instance
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
