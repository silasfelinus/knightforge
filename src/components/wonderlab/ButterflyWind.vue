<template>
  <div>
    <!-- Add the wind direction slider -->
    <q-slider
      :label="true"
      label-always
      label-text="Wind Direction"
      v-model="windDirection"
      :min="0"
      :max="360"
      class="wind-slider"
    />
    <!-- Add the wind intensity slider -->
    <q-slider
      :label="true"
      label-always
      label-text="Wind Intensity"
      v-model="windIntensity"
      :min="1"
      :max="10"
      class="wind-slider"
    />
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
import { defineComponent, ref, onMounted } from 'vue';
import { QSlider } from 'quasar';

export default defineComponent({
  name: 'ButterflyHorde',
  components: {
    QSlider,
  },
  props: {
    number: {
      type: Number,
      default: 50,
    },
    vw: {
      type: Number,
      default: () => window.innerWidth,
    },
    vh: {
      type: Number,
      default: () => window.innerHeight,
    },
  },

  setup(props) {
    // Add wind direction and intensity refs
    const windDirection = ref(0);
    const windIntensity = ref(1);

    type Butterfly = {
      x: number;
      y: number;
      wingColor: string;
    };

    const butterflies = ref<Butterfly[]>([]);

    for (let i = 0; i < props.number; i++) {
      butterflies.value.push({
        x: Math.random() * props.vw,
        y: Math.random() * props.vh,
        wingColor: `rgba(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()}, 0.7)`,
      });
    }

    function getRandomNumber() {
      return Math.floor(Math.random() * 256);
    }

    function animateButterflies() {
      const windRadians = (windDirection.value * Math.PI) / 180;

      butterflies.value = butterflies.value.map((butterfly) => {
        const windX = windIntensity.value * Math.cos(windRadians);
        const windY = windIntensity.value * Math.sin(windRadians);

        const newX = butterfly.x + (Math.random() * 10 - 5) + windX;
        const newY = butterfly.y + (Math.random() * 10 - 5) + windY;
        return {
          ...butterfly,
          x: Math.max(0, Math.min(props.vw, newX)),
          y: Math.max(0, Math.min(props.vh, newY)),
        };
      });

      requestAnimationFrame(animateButterflies);
    }

    onMounted(() => {
      animateButterflies();
    });

    return {
      butterflies,
      windDirection,
      windIntensity,
    };
  },
});
</script>

<style scoped></style>
