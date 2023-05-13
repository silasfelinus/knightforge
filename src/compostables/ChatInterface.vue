<template>
  <div id="chat-container">
    <button id="chat-toggle" @click="toggleChat">
      <i class="fas fa-comments"></i>
    </button>
    <div id="chat-popup" :class="{ visible: isChatVisible }">
      <div class="chat-message">
        <p>
          Hi! Welcome to Cafe Purr. I'm Serendipity, your helpful AI assistant.
          What can I do for you today?
        </p>
      </div>
      <div class="user-input">
        <input type="text" placeholder="Type your message here..." />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isChatVisible = ref(true);

function toggleChat() {
  isChatVisible.value = !isChatVisible.value;
}
</script>

<style lang="scss">
@import 'src/css/quasar.variables.scss';

#chat-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 2000;
}

#chat-toggle {
  background-color: $blue;
  color: $background;
  border: none;
  font-size: 1.5rem;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s;
}

#chat-toggle:hover {
  background-color: darken($blue, 10%);
}

#chat-popup {
  position: absolute;
  bottom: 80px;
  right: 0;
  background-color: $background;
  width: 400px;
  border-radius: 8px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.25);
  padding: 16px;
  display: none;
  transition: all 0.3s;
}

#chat-popup.visible {
  display: block;
}

.chat-message {
  background-color: $blue;
  color: $background;
  padding: 8px 16px;
  border-radius: 20px;
  display: inline-block;
  font-weight: bold;
  font-size: 1.1rem;
}

.user-input {
  margin-top: 16px;
}

.user-input input {
  width: 100%;
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid $blue;
  outline: none;
  font-size: 1rem;
  color: $dark;
  transition: border-color 0.3s;
}

.user-input input:focus {
  border-color: $blue;
}
</style>
