<template>
  <div
    class="bubble-container"
    @click="popBubble"
    :style="bubbleContainerStyle"
  >
    <div class="bubble" :style="bubbleStyle"></div>
    <component :is="currentMessageComponent" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import SplashMessage from './WonderMessage.vue';
import SplashMessage2 from './WonderMessage2.vue';

export default defineComponent({
  name: 'BubbleMessage',
  components: {
    SplashMessage,
    SplashMessage2,
  },
  setup() {
    const currentMessageComponent = ref('SplashMessage');
    const x = ref(Math.random() * 70 + 15);
    const y = ref(Math.random() * 70 + 15);

    const bubbleContainerStyle = ref(
      `left: ${x.value}%; top: ${y.value}%; animation: float 6s ease-in-out infinite, move 15s linear infinite;`
    );
    const bubbleStyle = ref(
      `background: radial-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.1)); border-radius: 50%; width: 100%; height: 100%; position: absolute;`
    );

    const popBubble = () => {
      bubbleStyle.value = 'visibility: hidden;';
      bubbleContainerStyle.value = `left: ${x.value}%; top: 100%; transform: rotate(20deg); transition: top 1s ease-in, transform 0.5s ease-in; animation: none;`;

      setTimeout(() => {
        x.value = Math.random() * 70 + 15;
        y.value = Math.random() * 70 + 15;

        currentMessageComponent.value =
          currentMessageComponent.value === 'SplashMessage'
            ? 'SplashMessage2'
            : 'SplashMessage';

        bubbleContainerStyle.value = `left: ${x.value}%; top: ${y.value}%; animation: float 6s ease-in-out infinite, move 15s linear infinite;`;
        bubbleStyle.value = `background: radial-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.1)); border-radius: 50%; width: 100%; height: 100%; position: absolute; visibility: visible;`;
      }, 1000);
    };

    return {
      bubbleContainerStyle,
      bubbleStyle,
      popBubble,
      currentMessageComponent,
    };
  },
});
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
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: top 0.3s ease-in;
}

.component {
  font-family: 'Quicksand', sans-serif;
  font-size: 24px;
  text-align: center;
  color: #333;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
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
