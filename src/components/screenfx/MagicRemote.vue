<template>
  <div class="remote-control">
    <h2>Remote Control</h2>
    <div class="buttons-container">
      <button
        v-for="(button, index) in buttons"
        :key="index"
        @click="button.action"
      >
        {{ button.label }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RemoteControl',
  data() {
    return {
      buttons: [
        { label: 'Button 1', action: () => console.log('Button 1 clicked') },
        { label: 'Button 2', action: () => console.log('Button 2 clicked') },
        // Add more buttons here
      ],
    };
  },
});
</script>

<style scoped>
.remote-control {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
}

.buttons-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
}
</style>
