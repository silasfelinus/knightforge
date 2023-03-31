<template>
  <div class="under-construction">
    <h1>Under Construction</h1>
    <p>We are currently working on this section. Please check back later!</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UnderConstruction',
});
</script>

<style scoped lang="scss">
.under-construction {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
}
</style>
