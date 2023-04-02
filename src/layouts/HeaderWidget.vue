<!-- HeaderWidget.vue -->
<template>
  <header>
    <h1>WonderForge</h1>
    <button @click="addNewCard">Add New Card</button>
  </header>
</template>

<script>
import { useAppStore } from '@/stores/app';

export default {
  name: 'HeaderWidget',
  setup() {
    const appStore = useAppStore();

    function addNewCard() {
      appStore.addScreenCard({
        content: 'New Card',
        x: 0,
        y: 0,
        width: 200,
        height: 200,
      });
    }

    return {
      addNewCard,
    };
  },
};

