<template>
  <q-layout>
    <q-drawer show-if-above class="butterfly-right-drawer">
      <LayerMenu /> </q-drawer
  ></q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LayerMenu from '../gamescreens/LayerMenu.vue';

export default defineComponent({
  name: 'ButterflyRightDrawer',
  components: {
    LayerMenu,
  },
});
</script>

<style scoped>
.butterfly-right-drawer {
  height: 100%;
  background-color: #f5f5f5;
  border-right: 1px solid #e0e0e0;
}
</style>
