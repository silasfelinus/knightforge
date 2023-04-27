<template>
  <div
    class="butterfly"
    :class="{ 'w-state': isWState }"
    @click="toggleState"
    :style="{ left: x + 'px', top: y + 'px' }"
  >
    <div class="left-wing">
      <div class="top" :style="{ background: wingColor }"></div>
      <div class="bottom" :style="{ background: wingColor }"></div>
    </div>
    <div class="right-wing">
      <div class="top" :style="{ background: wingColor }"></div>
      <div class="bottom" :style="{ background: wingColor }"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useRandomColor } from '@/composables/useRandomColor';
import anime from 'animejs/lib/anime.es.js';

const props = defineProps<{
  wingColor?: string;
}>();

const wingColor = props.wingColor || useRandomColor().randomColor.value;

const x = ref(0);
const y = ref(0);

function getRandomSpeed() {
  return Math.random() * 2 + 0.5;
}

function getRandomDirection() {
  return Math.random() * 2 * Math.PI;
}

const dx = ref(getRandomSpeed() * Math.cos(getRandomDirection()));
const dy = ref(getRandomSpeed() * Math.sin(getRandomDirection()));

function updatePosition() {
  x.value += dx.value;
  y.value += dy.value;

  if (x.value < 0 || x.value > window.innerWidth - 100) {
    dx.value = -dx.value;
  }

  if (y.value < 0 || y.value > window.innerHeight - 100) {
    dy.value = -dy.value;
  }
}

function animate() {
  updatePosition();
  requestAnimationFrame(animate);
}

onMounted(() => {
  updatePosition();
  animate();
});

const isWState = ref(false);

function toggleState() {
  isWState.value = !isWState.value;
}

watch(isWState, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    if (newValue) {
      // Morph to "W" state
      anime({
        targets: ['.left-wing', '.right-wing'],
        keyframes: [
          {
            rotateZ: '-20deg',
            translateX: '-2px',
            translateY: '-8px',
            duration: 250,
          },
          {
            rotateZ: '0deg',
            translateX: '0px',
            translateY: '0px',
            duration: 250,
          },
        ],
        easing: 'easeInOutQuad',
      });
    } else {
      // Morph back to butterfly state
      anime({
        targets: ['.left-wing', '.right-wing'],
        keyframes: [
          {
            rotateZ: '20deg',
            translateX: '2px',
            translateY: '8px',
            duration: 250,
          },
          {
            rotateZ: '0deg',
            translateX: '0px',
            translateY: '0px',
            duration: 250,
          },
        ],
        easing: 'easeInOutQuad',
      });
    }
  }
});
</script>

<style scoped>
body {
  background: #111;
}

@keyframes morph-to-w {
  0% {
    transform: rotate3d(0, 0, 0, 0);
  }
  100% {
    transform: rotate3d(0, 1, 0, 0);
    transform-origin: center center;
    border-radius: 0;
    width: 50px;
    height: 50px;
  }
}

@keyframes morph-to-butterfly {
  0% {
    transform: rotate3d(0, 0, 0, 0);
  }
  100% {
    transform: rotate3d(1, 0.5, 0, 110deg);
    transform-origin: center center;
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }
}

.butterfly {
  width: 100px;
  height: 100px;
  position: absolute;
  transform-style: preserve-3d;
  transform: rotate3d(1, 0.5, 0, 110deg);
}

.w-state {
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  animation: morph-to-w 0.5s forwards;
}

.w-state .left-wing,
.w-state .right-wing {
  animation: none;
}

.left-wing,
.right-wing {
  position: absolute;
  width: 24px;
  height: 42px;
  top: 10px;
}

.left-wing {
  left: 10px;
  transform-origin: 24px 50%;
  transform: rotate3d(0, 1, 0, 20deg);
  animation: flutter-left 0.3s infinite;
}

.right-wing {
  left: 34px;
  transform-origin: 0px 50%;
  transform: rotate3d(0, 1, 0, -20deg);
  animation: flutter-right 0.3s infinite;
}

.left-wing .top {
  right: 0;
}

.top,
.bottom {
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
