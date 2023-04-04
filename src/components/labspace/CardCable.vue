<!-- CardCable.vue -->
<template>
  <div
    class="card-cable"
    ref="card-cable"
    :style="{ top: startY + 'px', left: startX + 'px' }"
  >
    <div class="cable-line" :style="cableStyle"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  name: 'CardCable',
  props: {
    startX: {
      type: Number,
      required: true
    },
    startY: {
      type: Number,
      required: true
    },
    endX: {
      type: Number,
      required: true
    },
    endY: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const cable = ref(null);

    const cableStyle = computed(() => {
      const length = Math.sqrt(
        Math.pow(props.endX - props.startX, 2) +
          Math.pow(props.endY - props.startY, 2)
      );
      const angle =
        (Math.atan2(props.endY - props.startY, props.endX - props.startX) *
          180) /
        Math.PI;

      return {
        width: length + 'px',
        transform: `rotate(${angle}deg)`
      };
    });

    return {
      cable,
      cableStyle
    };
  }
});
</script>

<style scoped lang="scss">
.card-cable {
  position: absolute;
  z-index: 1000;
}

.cable-line {
  position: absolute;
  height: 2px;
  background-color: $warning;
}
</style>
