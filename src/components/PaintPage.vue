<!-- src/components/PaintPage.vue -->
<template>
  <q-page class="flex flex-center">
    <div class="paint-container">
      <ToolBar />
      <PaintCanvas />
    </div>
  </q-page>
</template>

<script>
import ToolBar from './ToolBar';
import PaintCanvas from './PaintCanvas';

export default {
  components: {
    ToolBar,
    PaintCanvas,
  },
};
</script>

<style scoped>
.paint-container {
  display: flex;
  flex-direction: column;
}
</style>
