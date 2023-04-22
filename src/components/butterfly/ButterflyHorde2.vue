<template>
  <div class="butterfly-horde" @click="createButterflies">
    <div
      v-for="(butterfly, index) in butterflies"
      :key="index"
      class="butterfly"
      :style="{
        left: butterfly.x + 'px',
        top: butterfly.y + 'px',
        transform: `scale(${butterfly.scale})`,
      }"
    >
      <div class="left-wing" :style="{ background: butterfly.color }">
        <div class="top"></div>
        <div class="bottom"></div>
      </div>
      <div class="right-wing" :style="{ background: butterfly.color }">
        <div class="top"></div>
        <div class="bottom"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, onMounted } from 'vue';

export default defineComponent({
  name: 'ButterflyHorde',
  props: {
    count: {
      type: Number,
      default: 50,
    },
    batchSize: {
      type: Number,
      default: 10,
    },
  },
  setup(props) {
    type Butterfly = {
      x: number;
      y: number;
      dx: number;
      dy: number;
      scale: number;
      color: string;
    };

    const butterflies: Ref<Butterfly[]> = ref([]);

    function getRandomNumber() {
      return Math.floor(Math.random() * 256);
    }

    function getRandomColor() {
      return `rgba(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()}, 0.7)`;
    }

    function getRandomSpeed() {
      return Math.random() * 4 + 0.5;
    }

    function getRandomDirection() {
      return Math.random() * 2 * Math.PI;
    }

    function createButterflies() {
      for (let i = 0; i < props.batchSize; i++) {
        butterflies.value.push({
          x: 0,
          y: 0,
          dx: getRandomSpeed() * Math.cos(getRandomDirection()),
          dy: getRandomSpeed() * Math.sin(getRandomDirection()),
          scale: 0,
          color: getRandomColor(),
        });
      }
      animateButterflies(
        butterflies.value.length - props.batchSize,
        props.batchSize
      );
    }

    function animateButterflies(startIndex: number, count: number) {
      if (count === 0) return;

      setTimeout(() => {
        butterflies.value[startIndex].scale = 1;
        animateButterflies(startIndex + 1, count - 1);
      }, 20);
    }

    function updatePosition(index: number) {
      butterflies.value[index].x += butterflies.value[index].dx;
      butterflies.value[index].y += butterflies.value[index].dy;

      if (
        butterflies.value[index].x < 0 ||
        butterflies.value[index].x > window.innerWidth - 100
      ) {
        butterflies.value[index].dx = -butterflies.value[index].dx;
      }

      if (
        butterflies.value[index].y < 0 ||
        butterflies.value[index].y > window.innerHeight - 100
      ) {
        butterflies.value[index].dy = -butterflies.value[index].dy;
      }
    }
    function animate() {
      for (let i = 0; i < butterflies.value.length; i++) {
        updatePosition(i);
      }
      requestAnimationFrame(animate);
    }

    onMounted(() => {
      animate();
    });

    return {
      butterflies,
      createButterflies,
    };
  },
});
</script>

<style scoped>
body {
  background: #111;
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

.butterfly-horde {
  position: relative;
  width: 100px;
  height: 100px;
  background: url('chest-image.png') no-repeat center center;
  background-size: cover;
  cursor: pointer;
}

.butterfly {
  width: 100px;
  height: 100px;
  position: absolute;
  transform-style: preserve-3d;
  transform-origin: 50% 50%;
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
