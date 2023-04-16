<template>
  <div class="remote-control">
    <h2 class="remote-title">MagicRemote</h2>
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
  name: 'MagicRemote',
  data() {
    return {
      buttons: [
        {
          label: 'Change Background Color',
          action: () => console.log('Change Background Color clicked'),
        },
        {
          label: 'Add GameScreen',
          action: () => console.log('Add GameScreen clicked'),
        },
        // Add custom actions here
        { label: 'Custom 1', action: () => console.log('Custom 1 clicked') },
        { label: 'Custom 2', action: () => console.log('Custom 2 clicked') },
        { label: 'Custom 3', action: () => console.log('Custom 3 clicked') },
        { label: 'Custom 4', action: () => console.log('Custom 4 clicked') },
        { label: 'Custom 5', action: () => console.log('Custom 5 clicked') },
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
  background: #f0f0f0;
  border-radius: 5px;
}

.remote-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #4a4a4a;
}

.buttons-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  background-color: #4a4a4a;
  color: white;
  border: none;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;
}
</style>
