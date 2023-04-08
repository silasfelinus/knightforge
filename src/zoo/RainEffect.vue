<template>
  <div class="weather-container">
    <div
      v-for="(_, index) in numberOfDrops"
      :key="index"
      class="rain-drop"
      :style="{
        left: randomXPosition() + 'px',
        top: randomYPosition() + 'px',
        animationDuration: randomDuration() + 's',
        animationDelay: randomDelay() + 's',
        width: randomSize() + 'px',
        height: randomSize() * 5 + 'px',
        transform: initialTransform(),
      }"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    intensity: {
      type: Number as PropType<number>,
      default: 1,
    },
    numberOfDrops: {
      type: Number as PropType<number>,
      default: 100,
    },
    windAngle: {
      type: Number as PropType<number>,
      default: 0,
    },
  },
  mounted() {
    document.documentElement.style.setProperty(
      '--wind-angle',
      `${this.windAngle}deg`
    );
  },
  methods: {
    randomXPosition(): number {
      return Math.floor(Math.random() * window.innerWidth);
    },
    randomYPosition(): number {
      return Math.floor(Math.random() * window.innerHeight);
    },
    randomDuration(): number {
      const minDuration = 5;
      const maxDuration = 10;
      const duration =
        minDuration + Math.random() * (maxDuration - minDuration);
      return duration;
    },
    randomDelay(): number {
      return Math.random() * 2;
    },
    randomSize(): number {
      return 1 + Math.random() * 2;
    },
    initialTransform(): string {
      return `translateY(-100%)`;
    },
    fallAnimationName(): string {
      return `fall-${this.windAngle}`;
    },
  },
});
</script>

<style scoped>
.weather-container {
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.rain-drop {
  position: absolute;
  background-color: #00b0ff;
  opacity: 0.5;
  border-radius: 50% 50% 60% 60%;
  animation: fall linear infinite forwards;
  will-change: transform;
}

@keyframes fall {
  0% {
    transform: translateY(-100%) rotate(0deg);
  }
  100% {
    transform: translateY(calc(100% + 100vh)) rotate(var(--wind-angle, 0deg));
  }
}
</style>
