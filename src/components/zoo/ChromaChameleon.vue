<template>
  <Animal
    :initial-position="initialPosition"
    :movement-speed="movementSpeed"
    :size="size"
    @mousemove="onMouseMove"
  >
    <div class="chameleon" :style="chameleonStyle">
      <div class="eye left-eye" :style="eyeStyle"></div>
      <div class="eye right-eye" :style="eyeStyle"></div>
    </div>
  </Animal>
</template>

<script>
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
      default: () => ({ width: 100, height: 50 }),
    },
  },
  data() {
    return {
      chameleonColor: '#4CAF50',
      eyeRotation: 0,
    };
  },
  computed: {
    chameleonStyle() {
      return {
        backgroundColor: this.chameleonColor,
      };
    },
    eyeStyle() {
      return {
        transform: `rotate(${this.eyeRotation}deg)`,
      };
    },
  },
  methods: {
    changeColor() {
      const randomColor =
        '#' + Math.floor(Math.random() * 16777215).toString(16);
      this.chameleonColor = randomColor;
    },
    onMouseMove(event) {
      const chameleonCenterX = this.position.x + this.size.width / 2;
      const chameleonCenterY = this.position.y + this.size.height / 2;
      const angle =
        Math.atan2(
          event.clientY - chameleonCenterY,
          event.clientX - chameleonCenterX
        ) *
        (180 / Math.PI);
      this.eyeRotation = angle;
    },
  },
  mounted() {
    this.$el.addEventListener('click', this.changeColor);
  },
  beforeUnmount() {
    this.$el.removeEventListener('click', this.changeColor);
  },
};
</script>

<style scoped>
.chameleon {
  position: absolute;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.eye {
  position: absolute;
  background-color: white;
  width: 30%;
  height: 40%;
  border-radius: 50%;
}

.left-eye {
  left: 25%;
}

.right-eye {
  right: 25%;
}
</style>
