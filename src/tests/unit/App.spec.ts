// src/tests/unit/App.spec.ts

import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App.vue', () => {
  it('renders the app successfully', () => {
    const wrapper = shallowMount(App);
    expect(wrapper.exists()).toBeTruthy();
  });
});
