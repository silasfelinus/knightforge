// src/composables/livechat.js
import { ref } from 'vue';
import axios from 'axios';
import auth from './auth';

const BASE_URL = process.env.API_URL;
const chatMessages = ref([]);

async function fetchMessages() {
  try {
    const response = await axios.get(`${BASE_URL}/messages`, {
      headers: { Authorization: `Bearer ${auth.authToken.value}` },
    });

    console.log('API response data:', response.data); // Add this line
    chatMessages.value = response.data;
  } catch (error) {
    console.error('Error fetching messages:', error);
  }
}

async function sendMessage(username, content) {
  try {
    await axios.post(
      `${BASE_URL}/messages`,
      { username, content },
      {
        headers: { Authorization: `Bearer ${auth.authToken.value}` },
      }
    );

    fetchMessages();
  } catch (error) {
    console.error('Error sending message:', error);
  }
}

export default {
  chatMessages,
  fetchMessages,
  sendMessage,
};
