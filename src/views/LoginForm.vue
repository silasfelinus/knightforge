<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="submitForm">
      <label>
        Email:
        <input v-model="email" type="email" />
      </label>
      <label>
        Password:
        <input v-model="password" type="password" />
      </label>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useAppStore } from '@/stores/useAppStore';

export default defineComponent({
  setup() {
    const email = ref('');
    const password = ref('');
    const appStore = useAppStore();

    const submitForm = async () => {
      if (await appStore.login(email.value, password.value)) {
        alert('Login successful!');
      } else {
        alert('Invalid credentials. Please try again.');
      }
    };

    return { email, password, submitForm };
  }
});
</script>
