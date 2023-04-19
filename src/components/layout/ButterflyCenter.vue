<template>
  <div class="butterfly-center">
    <div class="quadrant top-left"></div>
    <div class="quadrant top-right"></div>
    <div class="quadrant bottom-left"></div>
    <div class="quadrant bottom-right"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ButterflyCenter',
});
</script>

<style lang="scss" scoped>
.butterfly-center {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100vh;
}

.quadrant {
  flex: 1 1 50%;
  position: relative;
  overflow: hidden;
  box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.15);
}

.top-left {
  background-color: #ff7f7f;
}

.top-right {
  background-color: #7f7fff;
}

.bottom-left {
  background-color: #7fff7f;
}

.bottom-right {
  background-color: #ffff7f;
}

.quadrant::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-size: 40px 40px;
  opacity: 0.4;
}
</style>
