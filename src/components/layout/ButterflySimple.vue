<template>
  <div
    class="butterfly"
    :style="{ left: x + 'px', top: y + 'px', '--wing-color': wingColor }"
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
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'ButterflyMascot',
  setup() {
    const x = ref(0);
    const y = ref(0);
    const wingColor = ref(
      `rgba(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()}, 0.7)`
    );

    function getRandomNumber() {
      return Math.floor(Math.random() * 256);
    }

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

    return {
      x,
      y,
      wingColor,
      updatePosition,
      animate,
    };
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
