<template>
  <q-drawer show-if-above class="butterfly-left-drawer">
    <LayerMenu />
  </q-drawer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LayerMenu from '../layout/LayerMenu.vue';

export default defineComponent({
  name: 'ButterflyLeftDrawer',
  components: {
    LayerMenu,
  },
});
</script>

<style scoped>
.butterfly-left-drawer {
  height: 100%;
  background-color: #f5f5f5;
  border-right: 1px solid #e0e0e0;
}
</style>
