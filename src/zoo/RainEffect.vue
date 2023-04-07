<template>
  <WeatherEffect :intensity="intensity">
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
  </WeatherEffect>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import WeatherEffect from './WeatherEffect.vue';

export default defineComponent({
  components: {
    WeatherEffect,
  },
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
  methods: {
    randomXPosition(): number {
      return Math.floor(Math.random() * window.innerWidth);
    },
    randomYPosition(): number {
      return -Math.floor(Math.random() * window.innerHeight);
    },
    randomDuration(): number {
      return 0.5 + Math.random() * 2;
    },
    randomDelay(): number {
      return Math.random() * 2;
    },
    randomSize(): number {
      return 1 + Math.random() * 2;
    },
    initialTransform(): string {
      return `translateY(0%) rotate(${this.windAngle}deg)`;
    },
  },
});
</script>

<style scoped>
.rain-drop {
  position: absolute;
  background-color: #00b0ff;
  opacity: 0.5;
  border-radius: 50% 50% 60% 60%;
  animation: fall linear;
}

@keyframes fall {
  0% {
    transform: translateY(-100%) rotate(0deg);
  }
  100% {
    transform: translateY(100%) rotate(0deg);
  }
}
</style>
