<template>
  <div>
    <h1>{{ greeting }}</h1>
    <button @click="changeGreeting">Change Greeting</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useGreetingStore } from './useGreetingStore';

export default defineComponent({
  name: 'ExampleHome',
  setup() {
    // Local variable
    const greeting = ref('Hello, World!');

    // Global call to the Pinia store
    const greetingStore = useGreetingStore();

    // Local call to change greeting value
    const changeGreeting = () => {
      greeting.value = greetingStore.randomGreeting();
    };

    return {
      greeting,
      changeGreeting,
    };
  },
});
</script>

<style lang="scss">
/* Add component-specific styles */
</style>
