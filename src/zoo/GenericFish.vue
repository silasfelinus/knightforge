<template>
  <Animal
    :initial-position="initialPosition"
    :movement-speed="movementSpeed"
    :size="size"
  >
    <div class="fish" :style="fishStyle">
      <div class="fish-body"></div>
      <div class="fish-tail"></div>
    </div>
  </Animal>
</template>

<script lang="ts">
import Animal from './ZooAnimal.vue';

export default {
  components: {
    Animal,
  },
  props: {
    initialPosition: {
      type: Object,
      default: () => ({ x: 100, y: 100 }),
    },
    movementSpeed: {
      type: Number,
      default: 1,
    },
    size: {
      type: Object,
      default: () => ({ width: 60, height: 20 }),
    },
  },
  data() {
    return {
      containerSize: { width: window.innerWidth, height: window.innerHeight },
    };
  },
  computed: {
    fishStyle() {
      return {
        transform: `scaleX(${this.direction.x > 0 ? 1 : -1})`,
      };
    },
  },
  methods: {
    updateDirection() {
      if (
        this.position.x <= 0 ||
        this.position.x >= this.containerSize.width - this.size.width
      ) {
        this.direction.x *= -1;
      }
      if (
        this.position.y <= 0 ||
        this.position.y >= this.containerSize.height - this.size.height
      ) {
        this.direction.y *= -1;
      }
    },
  },
  mounted() {
    this.$parent.$on('animal-mounted', () => {
      const updateFishPosition = () => {
        this.move();
        this.updateDirection();
        requestAnimationFrame(updateFishPosition);
      };
      updateFishPosition();
    });
  },
};
</script>

<style scoped>
.fish {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
}

.fish-body {
  background-color: #f44336;
  width: 70%;
  height: 100%;
  border-radius: 50%;
}

.fish-tail {
  background-color: #f44336;
  width: 30%;
  height: 80%;
  clip-path: polygon(0 0, 100% 50%, 0 100%);
}
</style>
