<template>
  <div @mouseenter="sendCoordinates" class="flower">
    <!-- Flower content here -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'ButterflyFlower',
  props: {
    onCoordinates: {
      type: Function,
      default: null,
    },
  },
  setup(props) {
    const x = ref(0);
    const y = ref(0);
    const z = ref(0);

    function sendCoordinates() {
      if (typeof props.onCoordinates === 'function') {
        props.onCoordinates(x.value, y.value, z.value);
      }
    }

    return {
      sendCoordinates,
    };
  },
});
</script>
