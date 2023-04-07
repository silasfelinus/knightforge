<template>
  <div class="soap-bubbles">
    <div
      v-for="(bubble, index) in bubbles"
      :key="index"
      class="bubble"
      :style="bubbleStyle(bubble)"
      @click="popBubble(index)"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bubbles: [],
      bubbleCreationInterval: null,
    };
  },
  methods: {
    createBubble() {
      const size = Math.random() * 50 + 20;
      const x = Math.random() * (window.innerWidth - size);
      const y = window.innerHeight - size;
      const duration = Math.random() * 3 + 2;

      this.bubbles.push({ x, y, size, duration });
    },
    popBubble(index) {
      this.bubbles.splice(index, 1);
    },
    bubbleStyle(bubble) {
      return {
        left: `${bubble.x}px`,
        bottom: `${bubble.y}px`,
        width: `${bubble.size}px`,
        height: `${bubble.size}px`,
        animationDuration: `${bubble.duration}s`,
      };
    },
  },
  mounted() {
    this.bubbleCreationInterval = setInterval(this.createBubble, 1000);
  },
  beforeUnmount() {
    clearInterval(this.bubbleCreationInterval);
  },
};
</script>

<style scoped>
.soap-bubbles {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.bubble {
  position: absolute;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.5);
  animation: floatBubbles linear infinite;
}

@keyframes floatBubbles {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
}
</style>
