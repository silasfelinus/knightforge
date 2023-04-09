<template>
  <div :style="animalStyle" class="animal">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    initialPosition: {
      type: Object,
      default: () => ({ x: 0, y: 0 }),
    },
    movementSpeed: {
      type: Number,
      default: 1,
    },
    size: {
      type: Object,
      default: () => ({ width: 50, height: 50 }),
    },
  },
  data() {
    return {
      position: { x: 0, y: 0 },
      direction: { x: 1, y: 1 },
    };
  },
  computed: {
    animalStyle() {
      return {
        left: `${this.position.x}px`,
        top: `${this.position.y}px`,
        width: `${this.size.width}px`,
        height: `${this.size.height}px`,
      };
    },
  },
  methods: {
    initialize() {
      this.position = { ...this.initialPosition };
    },
    move() {
      this.position.x += this.direction.x * this.movementSpeed;
      this.position.y += this.direction.y * this.movementSpeed;
    },
    changeDirection(newDirection) {
      this.direction = { ...newDirection };
    },
  },
  mounted() {
    this.initialize();
    this.$emit('animal-mounted');
    // Set up event listeners or intervals for updating the position and direction
  },
  beforeUnmount() {
    // Clean up event listeners or intervals
  },
};
</script>

<style scoped>
.animal {
  position: absolute;
}
</style>
