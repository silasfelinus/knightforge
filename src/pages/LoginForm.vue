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
import { useAuthStore } from '@/stores/useAuthStore';

export default defineComponent({
  setup() {
    const email = ref('');
    const password = ref('');
    const authStore = useAuthStore();

    const submitForm = async () => {
      if (await authStore.login(email.value, password.value)) {
        alert('Login successful!');
      } else {
        alert('Invalid credentials. Please try again.');
      }
    };

    return { email, password, submitForm };
  },
});
</script>
