<template>
  <div>
    <div
      v-for="i in number"
      :key="'butterfly-' + i"
      class="butterfly"
      :style="{
        left: butterflies[i - 1].x + 'px',
        top: butterflies[i - 1].y + 'px',
        '--wing-color': butterflies[i - 1].wingColor,
      }"
      @mouseover="$emit('butterfly-over', i)"
    >
      <div class="left-wing">
        <div class="top"></div>
        <div class="bottom"></div>
      </div>
      <div class="right-wing">
        <div class="top"></div>
        <div class="bottom"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch } from 'vue';

export default defineComponent({
  name: 'ButterflyHorde',
  props: {
    number: {
      type: Number,
      default: 50,
    },
    vw: {
      type: Number,
      default: window.innerWidth,
    },
    vh: {
      type: Number,
      default: window.innerHeight,
    },
  },
  setup(props) {
    type Butterfly = {
      x: number;
      y: number;
      wingColor: string;
    };

    const butterflies = ref<Butterfly[]>([]);

    function createButterflies() {
      butterflies.value = Array.from({ length: props.number }, () => {
        const x = Math.random() * props.vw;
        const y = Math.random() * props.vh;
        const wingColor = `rgba(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()}, 0.7)`;
        return { x, y, wingColor };
      });
    }

    function getRandomNumber() {
      return Math.floor(Math.random() * 256);
    }

    function animateButterflies() {
      butterflies.value = butterflies.value.map((butterfly) => {
        const newX = butterfly.x + (Math.random() * 10 - 5);
        const newY = butterfly.y + (Math.random() * 10 - 5);
        return {
          ...butterfly,
          x: Math.max(0, Math.min(props.vw, newX)),
          y: Math.max(0, Math.min(props.vh, newY)),
        };
      });

      requestAnimationFrame(animateButterflies);
    }

    watch(() => props.number, createButterflies, { immediate: true });

    onMounted(() => {
      createButterflies();
      animateButterflies();
    });

    return { butterflies };
  },
});
</script>

<style scoped>
body {
  background: #111;
}

:root {
  --wing-color: pink;
}

@keyframes flutter-left {
  0% {
    transform: rotate3d(0, 1, 0, 20deg);
  }
  50% {
    transform: rotate3d(0, 1, 0, 70deg);
  }
  100% {
    transform: rotate3d(0, 1, 0, 20deg);
  }
}

@keyframes flutter-right {
  0% {
    transform: rotate3d(0, 1, 0, -20deg);
  }
  50% {
    transform: rotate3d(0, 1, 0, -70deg);
  }
  100% {
    transform: rotate3d(0, 1, 0, -20deg);
  }
}

.butterfly {
  width: 100px;
  height: 100px;
  position: absolute;
  transform-style: preserve-3d;
  transform: rotate3d(1, 0.5, 0, 110deg);
}

.left-wing,
.right-wing {
  width: 24px;
  height: 42px;
  position: absolute;
  top: 10px;
}

.left-wing {
  left: 10px;
  top: 10px;
  transform-origin: 24px 50%;
  transform: rotate3d(0, 1, 0, 20deg);
  animation: flutter-left 0.3s infinite;
}

.right-wing {
  left: 34px;
  transform: rotate3d(0, 1, 0, -20deg);
  transform-origin: 0px 50%;
  animation: flutter-right 0.3s infinite;
}

.left-wing .top {
  right: 0;
}

.top,
.bottom {
  background: var(--wing-color);
  opacity: 0.7;
  position: absolute;
}
.top {
  width: 20px;
  height: 20px;
  border-radius: 10px;
}

.bottom {
  top: 18px;
  width: 24px;
  height: 24px;
  border-radius: 12px;
}
</style>
