<template>
  <div class="main-content">
    <MagicFrame />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MagicFrame from '../views/MagicFrame.vue';

export default defineComponent({
  name: 'MainContent',
  components: {
    MagicFrame
  }
});
</script>

<style scoped>
.main-content {
  flex-grow: 1;
}
</style>
