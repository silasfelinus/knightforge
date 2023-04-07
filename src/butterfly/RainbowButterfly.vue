<template>
  <div class="rainbow-butterfly" @click="emitLanded" :style="positionStyle">
    <svg
      class="butterfly"
      :style="{ fill: color }"
      width="50"
      height="50"
      viewBox="0 0 24 24"
    >
      <path
        d="M21.997 12c0 5.522-4.477 10-9.998 10-5.52 0-10-4.478-10-10 0-5.523 4.48-10 10-10 5.521 0 9.998 4.477 9.998 10zm-9.998-6c-3.314 0-6 2.687-6 6s2.686 6 6 6 6-2.688 6-6-2.686-6-6-6zm1 9h-2v-2h2v2zm0-4h-2v-4h2v4z"
      />
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  // ...
  props: {
    butterflyId: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    x: {
      type: Number,
      required: true,
    },
    y: {
      type: Number,
      required: true,
    },
  },
  computed: {
    positionStyle() {
      return {
        left: this.x + 'px',
        top: this.y + 'px',
      };
    },
  },
  methods: {
    emitLanded() {
      this.$emit('butterflyLanded', this.butterflyId);
    },
  },
});
</script>
<style scoped>
.rainbow-butterfly {
  position: absolute;
  transition: all 0.5s ease;
}

.butterfly {
  width: 50px;
  height: 50px;
}
</style>
