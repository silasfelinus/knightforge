<template>
  <div
    class="butterfly-mascot2"
    :style="{ left: x + 'px', top: y + 'px' }"
  ></div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'ButterflyMascot2',
  setup() {
    const x = ref(0);
    const y = ref(0);
    const directionX = ref(true);
    const directionY = ref(true);

    onMounted(() => {
      init();
      animate();
    });

    function init() {
      x.value = Math.floor(Math.random() * window.innerWidth);
      y.value = Math.floor(Math.random() * window.innerHeight);
    }

    function moveButterfly() {
      const speed = 5;
      if (directionX.value) {
        x.value += speed;
      } else {
        x.value -= speed;
      }

      if (directionY.value) {
        y.value += speed;
      } else {
        y.value -= speed;
      }

      if (x.value >= window.innerWidth || x.value <= 0) {
        directionX.value = !directionX.value;
      }

      if (y.value >= window.innerHeight || y.value <= 0) {
        directionY.value = !directionY.value;
      }
    }

    function animate() {
      moveButterfly();
      requestAnimationFrame(animate);
    }

    return {
      x,
      y,
      directionX,
      directionY,
      init,
      moveButterfly,
      animate,
    };
  },
});
</script>
