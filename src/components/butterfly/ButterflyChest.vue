<template>
  <div class="container" @click="openBox">
    <div class="box" :class="{ open: isOpen }">
      <div class="side front"></div>
      <div class="side back"></div>
      <div class="side right"></div>
      <div class="side left"></div>
      <div class="side top" v-if="!isOpen"></div>
      <butterfly-component v-if="isOpen" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ButterflyComponent from '../gamescreens/ButterflySimple.vue';

export default defineComponent({
  components: {
    ButterflyComponent,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    openBox() {
      this.isOpen = !this.isOpen;
    },
  },
});
</script>

<style scoped>
.container {
  perspective: 1500px;
}

.box {
  position: relative;
  width: 100px;
  height: 100px;
  transform-style: preserve-3d;
  transition: transform 0.5s;
}

.box.open {
  transform: rotateX(-110deg);
}

.side {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  backface-visibility: hidden;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
}

.front {
  transform: translateZ(50px);
}

.back {
  transform: rotateY(180deg) translateZ(50px);
}

.right {
  transform: rotateY(90deg) translateZ(50px);
}

.left {
  transform: rotateY(-90deg) translateZ(50px);
}

.top {
  transform: rotateX(90deg) translateZ(50px);
}
</style>
