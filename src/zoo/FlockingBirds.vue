<template>
  <div class="flocking-birds">
    <Animal
      v-for="(bird, index) in birds"
      :key="index"
      :initial-position="bird.position"
      :movement-speed="movementSpeed"
      :size="size"
    >
      <div class="bird">
        <div class="bird-wing"></div>
        <div class="bird-wing"></div>
      </div>
    </Animal>
  </div>
</template>

<script lang="ts">
import Animal from './ZooAnimal.vue';

type Bird = {
  position: {
    x: number;
    y: number;
  };
};

export default {
  components: {
    Animal,
  },
  props: {
    birdCount: {
      type: Number,
      default: 10,
    },
    movementSpeed: {
      type: Number,
      default: 1,
    },
    size: {
      type: Object,
      default: () => ({ width: 10, height: 5 }),
    },
  },
  data() {
    return {
      birds: [] as Bird[],
    };
  },
  methods: {
    createBirds() {
      for (let i = 0; i < this.birdCount; i++) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;

        this.birds.push({ position: { x, y } });
      }
    },
  },
  mounted() {
    this.createBirds();
  },
};
</script>

<style scoped>
.bird {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bird-wing {
  background-color: #3f51b5;
  width: 100%;
  height: 50%;
  animation: flap 0.5s ease-in-out infinite alternate;
}

@keyframes flap {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50%);
  }
}
</style>
