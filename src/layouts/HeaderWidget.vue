<template>
  <header>
    <h1>WonderForge</h1>
    <button @click="addNewCard">Add New Card</button>
    <button @click="removeSelectedCards">Remove Selected Cards</button>
    <button @click="saveStep">Save Step</button>
    <button @click="undo">Undo</button>
    <button @click="showLoginForm = !showLoginForm">Login</button>
    <button @click="logout">Logout</button>
    <LoginForm v-if="showLoginForm" @login="onLogin" />
  </header>
</template>

<script lang="ts">
import { useAppStore } from '@/stores/app';
import { useAuthStore } from '@/stores/authStore';
import LoginForm from '@/components/LoginForm.vue';

export default {
  name: 'HeaderWidget',
  components: { LoginForm },
  setup() {
    const appStore = useAppStore();
    const authStore = useAuthStore();

    const showLoginForm = ref(false);

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

    function onLogin() {
      showLoginForm.value = false;
    }

    function logout() {
      authStore.logout();
    }

    return {
      addNewCard,
      removeSelectedCards,
      saveStep,
      undo,
      showLoginForm,
      onLogin,
      logout,
    };
  },
};
</script>
