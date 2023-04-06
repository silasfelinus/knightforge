<template>
  <div class="under-construction">
    <h1>Under Construction</h1>
    <img :src="splashImage" alt="Under construction" />
    <p>We are currently working on this section. Please check back later!</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import splashImage from '@/assets/splash/splash06.png';

export default defineComponent({
  name: 'UnderConstruction',
  setup() {
    return {
      splashImage,
    };
  },
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
