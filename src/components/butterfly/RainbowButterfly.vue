<template>
  <div class="rainbow-butterfly" @click="emitLanded" :style="positionStyle">
    <svg
      class="butterfly"
      :style="{ fill: color }"
      width="50"
      height="50"
      viewBox="0 0 50 50"
    >
      <!-- Left Wing - Upper Part -->
      <path d="M25,15 Q15,12 10,2 C10,2 20,2 25,15" />
      <!-- Left Wing - Lower Part -->
      <path d="M25,15 Q15,18 10,32 C10,32 20,32 25,15" />
      <!-- Right Wing - Upper Part -->
      <path d="M25,15 Q35,12 40,2 C40,2 30,2 25,15" />
      <!-- Right Wing - Lower Part -->
      <path d="M25,15 Q35,18 40,32 C40,32 30,32 25,15" />
      <!-- Body -->
      <path d="M25,15 Q25,20 25,32" stroke-width="3" stroke-linecap="round" />
      <!-- Antenna - Left -->
      <path d="M25,2 Q22,5 20,8" stroke-width="1" stroke-linecap="round" />
      <!-- Antenna - Right -->
      <path d="M25,2 Q28,5 30,8" stroke-width="1" stroke-linecap="round" />
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
@keyframes hover {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

.rainbow-butterfly {
  position: absolute;
  animation: hover 1s ease-in-out infinite;
}
.rainbow-butterfly {
  position: absolute;
  transition: all 0.5s ease;
}

.butterfly {
  width: 50px;
  height: 50px;
}
</style>
