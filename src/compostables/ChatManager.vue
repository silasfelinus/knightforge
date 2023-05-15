<template>
  <div class="chat-manager">
    <header class="title-section">
      <h1>Cafe Purr Wonderchat</h1>
    </header>

    <section class="welcome-section">
      <p class="welcome-text">
        Welcome! Chat with one of the friendly robots making art at Humboldt
        County's human/robot art collective and next generation digital gallery
        Cafe Purr.
      </p>
    </section>

    <section class="chatroom-selector">
      <div class="avatar-buttons">
        <div
          v-for="room in chatrooms"
          :key="room.id"
          class="avatar-button"
          @mouseover="handleSpinButton($event)"
          @mouseleave="handleStopSpin($event)"
          @click="handleSelectChatroom(room.id)"
        >
          <img :src="room.avatar" :alt="room.name" class="avatar-img" />
        </div>
      </div>
    </section>

    <hr class="visual-divider" />

    <section v-if="selectedChatroomData" class="chat-display">
      <div class="large-avatar">
        <img
          :src="selectedChatroomData.avatar"
          :alt="selectedChatroomData.name"
          class="large-avatar-img"
        />
      </div>

      <div class="chat-area">
        <div :class="['chat-bubble', `color-${selectedChatroom}`]">
          <p>{{ selectedChatroomData.intro }}</p>
        </div>
      </div>

      <section class="user-input-section">
        <div class="input-bubble">
          <input
            v-model="userMessage"
            type="text"
            placeholder="Type your message here..."
            @keyup.enter="handleSendMessage"
          />
        </div>
      </section>
    </section>
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue';
import chatrooms from '@/assets/chatrooms.json';
import { useOpenAIChatbot } from '@/composables/useOpenAIChatbot';
import { useChatHistory } from '@/composables/useChatHistory';

// Define the Chatroom type
interface Chatroom {
  id: string;
  name: string;
  avatar: string;
  intro: string;
}

// Set up the selectedChatroom ref and selectedChatroomData computed property
const selectedChatroom = ref<string | null>(null);
const selectedChatroomData = computed<Chatroom | null>(() => {
  return chatrooms.find((room) => room.id === selectedChatroom.value) || null;
});

// Implement the handleSpinButton and handleStopSpin methods for the avatar buttons
function handleSpinButton(event: MouseEvent): void {
  const target = event.target as HTMLElement;
  if (target.classList.contains('avatar-img')) {
    target.classList.add('spin');
  }
}

function handleStopSpin(event: MouseEvent): void {
  const target = event.target as HTMLElement;
  if (target.classList.contains('avatar-img')) {
    target.classList.remove('spin');
  }
}

// Implement the handleSelectChatroom method to update the selected chatroom when an avatar button is clicked
function handleSelectChatroom(chatroomId: string): void {
  selectedChatroom.value = chatroomId;
}

// User message handling
const userMessage = ref<string>('');

async function handleSendMessage(): Promise<void> {
  if (!userMessage.value || !selectedChatroom.value) return;

  const { communicateWithChatbot } = useOpenAIChatbot();
  const { storeChatHistory } = useChatHistory();

  // Get the chatbot's response
  const chatbotResponse = await communicateWithChatbot(
    selectedChatroom.value,
    userMessage.value
  );

  // Store the chatbot's response
  storeChatHistory(selectedChatroom.value, 'chatbot', chatbotResponse);

  // Clear the user message input
  userMessage.value = '';
}
</script>
