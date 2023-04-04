<template>
  <div class="screen-widget">
    <div class="screen-content">
      <SplashImage />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SplashImage from './SplashImage.vue';

export default defineComponent({
  name: 'ScreenWidget',
  components: {
    SplashImage
  }
});
</script>

<style scoped>
.screen-widget {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.screen-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
