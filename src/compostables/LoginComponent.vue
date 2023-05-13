<!-- src/components/LoginComponent.vue -->
<template>
  <div class="login-container">
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">
      <input v-model="username" placeholder="Username" required />
      <input
        v-model="password"
        placeholder="Password"
        type="password"
        required
      />
      <button type="submit">Login</button>
    </form>
    <p v-if="auth.errorMessage" class="error-message">
      {{ auth.errorMessage }}
    </p>
  </div>
</template>

<script>
import auth from '../composables/auth';

export default {
  setup() {
    const username = ref('');
    const password = ref('');

    async function handleLogin() {
      await auth.login(username.value, password.value);
    }

    return {
      auth,
      username,
      password,
      handleLogin,
    };
  },
};
</script>
<style scoped>
.login-container {
  width: 100%;
  max-width: 350px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  color: #4a4a4a;
  margin-bottom: 1rem;
}

form {
  display: flex;
  flex-direction: column;
}

input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  font-size: 1em;
  outline: none;
}

button[type='submit'] {
  background-color: #007bff;
  border: none;
  color: white;
  padding: 10px 15px;
  font-size: 1em;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

button[type='submit']:hover {
  background-color: #0056b3;
}

.error-message {
  color: #dc3545;
  font-size: 0.9em;
  margin-top: 10px;
}
</style>
