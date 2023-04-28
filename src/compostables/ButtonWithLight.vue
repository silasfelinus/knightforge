<template>
  <button class="button" @click="toggleLight">
    <div class="light" :style="{ background: lightColor }"></div>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { defineProps } from 'vue';

const props = defineProps<{
  color: string;
  onColor: string;
}>();

const lightColor = ref(props.color);

function toggleLight() {
  lightColor.value =
    lightColor.value === props.color ? props.onColor : props.color;
}
</script>

<style scoped>
.button {
  position: relative;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}

.light {
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
</style>
