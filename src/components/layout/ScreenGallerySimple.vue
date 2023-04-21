<template>
  <div class="component-gallery">
    Component Gallery
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
.component-gallery {
  min-width: 200px;
  min-height: 200px;
  background-color: #92f2d4;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
