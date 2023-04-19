<template>
  <div class="chat-window-section">
    <div class="message-container">
      <div class="message message-in">
        <p>Hi there!</p>
      </div>
      <div class="message message-out">
        <p>Hello!</p>
      </div>
    </div>
    <div class="input-container">
      <input type="text" placeholder="Type your message here" />
      <button>Send</button>
    </div>
  </div>
</template>
<style scoped>
.message-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.message {
  border-radius: 10px;
  padding: 10px;
  max-width: 70%;
  word-wrap: break-word;
  font-size: 1.1rem;
}

.message-in {
  align-self: flex-start;
  background-color: #f1f0f0;
}

.message-out {
  align-self: flex-end;
  background-color: #e5f4e3;
}

.input-container {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

input[type='text'] {
  flex-grow: 1;
  border-radius: 10px;
  border: none;
  padding: 10px;
  font-size: 1.1rem;
}

button {
  border-radius: 10px;
  border: none;
  padding: 10px;
  background-color: #68cacc;
  color: #fff;
  font-size: 1.1rem;
  cursor: pointer;
}
</style>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ChatInterface',
});
</script>
