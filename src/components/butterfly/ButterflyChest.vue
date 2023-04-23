<template>
  <div class="container" @click="openBox" ref="container">
    <magic-box :opened="isOpen" />
    <butterfly-component v-if="isOpen" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import MagicBox from './MagicBox.vue';
import ButterflyComponent from '../gamescreens/ButterflySimple.vue';

export default defineComponent({
  components: {
    MagicBox,
    ButterflyComponent,
  },
  setup() {
    const isOpen = ref(false);

    function openBox() {
      isOpen.value = !isOpen.value;
    }

    return { isOpen, openBox };
  },
});
</script>

<style scoped>
.container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  perspective: 1500px;
  background-color: rgba(220, 220, 220, 0.5);
}
</style>
