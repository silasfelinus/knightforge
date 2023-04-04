<template>
  <div class="main-content">
    <ScreenWidget />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ScreenWidget from '../views/ScreenWidget.vue';

export default defineComponent({
  name: 'MainContent',
  components: {
    ScreenWidget
  }
});
</script>

<style scoped>
.main-content {
  flex-grow: 1;
}
</style>
