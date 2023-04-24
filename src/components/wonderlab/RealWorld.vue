<!-- RealWorld.vue -->
<template>
  <div class="real-world">
    <div class="sky">
      <butterfly-horde />
    </div>
    <div class="grass"></div>
    <input
      class="wind-slider"
      type="range"
      min="0"
      max="100"
      step="1"
      v-model="wind"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ButterflyHorde from './ButterflyHorde.vue';

export default defineComponent({
  name: 'RealWorld',
  components: {
    ButterflyHorde,
  },
  setup() {
    const wind = ref(0);

    // You can use wind value to affect the butterflies in the ButterflyHorde component if needed

    return { wind };
  },
});
</script>

<style lang="scss" scoped>
.real-world {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.sky {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background: linear-gradient(to bottom, #8ccaff 0%, #64b3f4 100%);
}

.grass {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background: linear-gradient(to bottom, #91dc5a 0%, #71b84f 100%);
}

.wind-slider {
  position: absolute;
  bottom: 5%;
  left: 5%;
  width: 20%;
  z-index: 10;
}
</style>
