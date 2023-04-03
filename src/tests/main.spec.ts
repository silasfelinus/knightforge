import { mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia';
import App from '../App.vue';

describe('main.ts', () => {
  it('mounts the App component', () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [],
    });
    const pinia = createPinia();

    const wrapper = mount(App, {
      global: {
        plugins: [router, pinia],
      },
    });

    expect(wrapper.exists()).toBeTruthy();
  });
});
