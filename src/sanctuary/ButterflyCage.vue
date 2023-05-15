<template>
  <div
    class="butterfly-cage"
    @click="onAlert"
    :style="{
      background: `rgba(255, 255, 255, 0.1)`,
    }"
  >
    <ButterflyGroup @alert="onAlert" />
    <p class="glass-message">DO NOT TAP THE GLASS</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ButterflyGroup from './ButterflyGroup.vue';

const isAlerted = ref(false);

const onAlert = () => {
  isAlerted.value = true;
  setTimeout(() => {
    isAlerted.value = false;
  }, 500);
};
</script>

<style scoped>
.butterfly-cage {
  position: relative;
  width: 70%;
  height: 50%;
  margin: 10px auto;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
}

.glass-message {
  position: absolute;
  bottom: 10px;
  width: 100%;
  text-align: center;
  color: red;
  font-weight: bold;
}
</style>
