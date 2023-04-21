<template>
  <div>
    <h1>Admin Page</h1>
    <div class="homepages-container">
      <HomePage1 />
      <HomePage2 />
      <HomePage3 />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HomePage1 from './HomePage3.vue';
import HomePage2 from './HomePage2.vue';
import HomePage3 from './HomePage1.vue';

export default defineComponent({
  components: {
    HomePage1,
    HomePage2,
    HomePage3,
  },
});
</script>

<style scoped>
.homepages-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
