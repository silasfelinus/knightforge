<template>
  <div class="test-component">
    <h1>{{ sillyMessage }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'TestComponent',
  setup() {
    const message = 'Hello, Vue!';

    const sillyMessage = computed(() => {
      return message.split('').reverse().join('').toUpperCase();
    });

    return {
      sillyMessage,
    };
  },
});
</script>

<style scoped>
.test-component {
  background-color: #a3d5ff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: 'Arial', sans-serif;
}

h1 {
  font-size: 2rem;
  color: #2c3e50;
}
</style>
