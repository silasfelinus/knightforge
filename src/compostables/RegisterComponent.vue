<!-- src/components/Register.vue -->
<template>
  <div class="register-container">
    <h1>Register</h1>
    <form @submit.prevent="handleRegister">
      <input v-model="username" placeholder="Username" required />
      <input v-model="email" placeholder="Email" type="email" required />
      <input
        v-model="password"
        placeholder="Password"
        type="password"
        required
      />
      <button type="submit">Register</button>
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
    const email = ref('');
    const password = ref('');

    async function handleRegister() {
      await auth.register(username.value, email.value, password.value);
    }

    return {
      auth,
      username,
      email,
      password,
      handleRegister,
    };
  },
};
</script>
<style scoped>
.register-container {
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
  background-color: #28a745;
  border: none;
  color: white;
  padding: 10px 15px;
  font-size: 1em;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

button[type='submit']:hover {
  background-color: #218838;
}

.error-message {
  color: #dc3545;
  font-size: 0.9em;
  margin-top: 10px;
}
</style>
