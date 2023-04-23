<template>
  <div
    class="bubble-container"
    @click="popBubble"
    :style="bubbleContainerStyle"
  >
    <div class="bubble" :style="bubbleStyle"></div>
    <div class="splash-message">{{ currentMessage }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import messages from './WonderMessage.vue';

const getRandomMessage = () => {
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
};

const x = ref(Math.random() * 70 + 15);
const y = ref(Math.random() * 70 + 15);

const bubbleContainerStyle = ref(
  `left: ${x.value}%; top: ${y.value}%; animation: float 6s ease-in-out infinite, move 15s linear infinite;`
);
const bubbleStyle = ref(
  `background: radial-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.1)); border-radius: 50%; width: 100%; height: 100%; position: absolute;`
);

const currentMessage = ref(getRandomMessage());

const popBubble = () => {
  bubbleStyle.value = 'visibility: hidden;';
  bubbleContainerStyle.value = `left: ${x.value}%; top: 100%; transform: rotate(20deg); transition: top 1s ease-in, transform 0.5s ease-in; animation: none;`;

  setTimeout(() => {
    x.value = Math.random() * 70 + 15;
    y.value = Math.random() * 70 + 15;

    currentMessage.value = getRandomMessage();

    bubbleContainerStyle.value = `left: ${x.value}%; top: ${y.value}%; animation: float 6s ease-in-out infinite, move 15s linear infinite;`;
    bubbleStyle.value = `background: radial-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.1)); border-radius: 50%; width: 100%; height: 100%; position: absolute; visibility: visible;`;
  }, 1000);
};
</script>

<style scoped>
.bubble-container {
  position: fixed;
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: top 0.3s ease-in;
}

.splash-message {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin-top: 2rem;
  z-index: 2;
}

.bubble {
  z-index: 1;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes move {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
