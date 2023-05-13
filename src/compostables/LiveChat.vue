<template>
  <div class="chat-container" v-if="auth.isAuthenticated">
    <h1>Live Chat</h1>
    <div class="messages">
      <div
        v-for="message in livechat.chatMessages"
        :key="message.id"
        class="message"
      >
        <div class="message-header">
          <span class="message-username">{{ message.username }}</span>
          <span class="message-timestamp">{{ message.timestamp }}</span>
        </div>
        <p class="message-content">{{ message.content }}</p>
      </div>
    </div>
    <form class="chat-input" @submit.prevent="handleSendMessage">
      <input
        v-model="message"
        placeholder="Type your message"
        required
        class="input-message"
      />
      <button type="submit" class="send-button">Send</button>
    </form>
    <button @click="auth.logout" class="logout-button">Logout</button>
  </div>
  <div v-else>
    <p>Please log in or register to access the live chat.</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import auth from '../composables/auth';
import livechat from '../composables/useLivechat';

const message = ref('');

livechat.fetchMessages();

async function handleSendMessage() {
  await livechat.sendMessage(auth.user.value.username, message.value);
  message.value = '';
}
</script>
<style scoped>
.chat-container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  color: #4a4a4a;
  margin-bottom: 1rem;
}

.messages {
  width: 100%;
  height: 400px;
  background-color: #f5f5f5;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 10px;
  overflow-y: auto;
}

.message {
  background-color: #ffffff;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 15px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.message-header {
  display: flex;
  align-items: baseline;
  margin-bottom: 5px;
}

.message-username {
  font-weight: bold;
  margin-right: 5px;
  color: #4a4a4a;
}

.message-timestamp {
  font-size: 0.8em;
  color: #999;
}

.message-content {
  color: #4a4a4a;
  margin: 0;
}

.chat-input {
  display: flex;
  width: 100%;
  margin-bottom: 10px;
}

.input-message {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  font-size: 1em;
}

.send-button {
  background-color: #007bff;
  border: none;
  color: white;
  padding: 10px 15px;
  font-size: 1em;
  border-radius: 5px;
  margin-left: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.send-button:hover {
  background-color: #0056b3;
}

.logout-button {
  background-color: #dc3545;
  border: none;
  color: white;
  padding: 10px 15px;
  font-size: 1em;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.logout-button:hover {
  background-color: #c82333;
}
</style>
