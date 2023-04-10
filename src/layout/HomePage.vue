<template>
  <div>
    <HomeComponents />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HomeComponents from './HomeComponents.vue';

export default defineComponent({
  components: {
    HomeComponents,
  },
});
</script>

<style scoped>
/* Add any required styles for the HomePage */
</style>
