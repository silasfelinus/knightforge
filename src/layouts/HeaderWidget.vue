<template>
  <header>
    <h1>WonderForge</h1>
    <button @click="addNewCard">Add New Card</button>
    <button @click="removeSelectedCards">Remove Selected Cards</button>
    <button @click="saveStep">Save Step</button>
    <button @click="undo">Undo</button>
    <button @click="login">Login</button>
    <button @click="logout">Logout</button>
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

    function removeSelectedCards() {
      appStore.removeSelectedCards();
    }

    function saveStep() {
      appStore.saveStep();
    }

    function undo() {
      appStore.undo();
    }

    function login() {
      appStore.login();
    }

    function logout() {
      appStore.logout();
    }

    return {
      addNewCard,
      removeSelectedCards,
      saveStep,
      undo,
      login,
      logout,
    };
  },
};
</script>

<style scoped lang="scss">
header {
  // Your header styles go here
}
</style>
