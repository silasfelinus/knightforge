import { ref } from 'vue';
import axios from 'axios';

const isAuthenticated = ref(false);
const authToken = ref('');
const errorMessage = ref('');
const apiUrl = process.env.API_URL;

const storedToken = localStorage.getItem('authToken');
if (storedToken) {
  isAuthenticated.value = true;
  authToken.value = storedToken;
}

async function login(username, password) {
  try {
    const response = await axios.post(`${apiUrl}/login`, {
      username,
      password,
    });
    if (response.status === 200) {
      isAuthenticated.value = true;
      authToken.value = response.data.token;
      localStorage.setItem('authToken', response.data.token);
    }
  } catch (error) {
    if (error.response) {
      errorMessage.value = error.response.data.message;
    } else {
      errorMessage.value = 'An error occurred while logging in.';
    }
  }
}

async function register(username, email, password) {
  try {
    const response = await axios.post(`${apiUrl}/register`, {
      username,
      email,
      password,
    });
    if (response.status === 200) {
      isAuthenticated.value = true;
      authToken.value = response.data.token;
      localStorage.setItem('authToken', response.data.token);
    }
  } catch (error) {
    if (error.response) {
      errorMessage.value = error.response.data.message;
    } else {
      errorMessage.value = 'An error occurred while registering.';
    }
  }
}

function logout() {
  isAuthenticated.value = false;
  authToken.value = '';
  localStorage.removeItem('authToken'); // Add this line
}

export default {
  isAuthenticated,
  authToken,
  errorMessage,
  login,
  register,
  logout,
};
