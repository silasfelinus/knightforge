<template>
  <splash-image
    v-bind="$attrs"
    :key="animationKey"
    :class="animationClass"
  ></splash-image>
</template>

<script lang="ts">
import { defineComponent, ref, watch, onMounted } from 'vue';
import SplashImage from '../gamescreens/SplashImage.vue';

export default defineComponent({
  components: { SplashImage },
  props: {
    timerInterval: {
      type: Number,
      default: 5000, // Default interval of 5 seconds
    },
    animationClass: {
      type: String,
      default: 'drop-animation',
    },
  },
  setup(props) {
    const animationKey = ref(0);
    let timerId: number | null = null;

    const updateImage = () => {
      animationKey.value++;
    };

    onMounted(() => {
      timerId = window.setInterval(updateImage, props.timerInterval);
    });

    watch(
      () => props.timerInterval,
      (newValue) => {
        if (timerId !== null) {
          window.clearInterval(timerId);
        }
        timerId = window.setInterval(updateImage, newValue);
      }
    );

    return { animationKey };
  },
});
</script>

<style scoped>
.drop-animation {
  animation: drop 1s;
}

@keyframes drop {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}
</style>
