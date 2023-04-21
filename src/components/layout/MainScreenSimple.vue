<template>
  <div class="main-screen">
    <div class="game-screen">Game Screen</div>
    <div class="component-gallery">Component Gallery</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>
.main-screen {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  width: 100%;
  height: 100%;
}

.game-screen,
.component-gallery {
  min-width: 200px;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.game-screen {
  grid-column: 1;
  grid-row: 1;
  background-color: #f2d492;
}

.component-gallery {
  grid-column: 2;
  grid-row: 1;
  background-color: #92f2d4;
}
</style>
