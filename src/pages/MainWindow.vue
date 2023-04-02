<template>
  <div class="main-window">
    <SplashPage />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SplashPage from './pages/SplashPage.vue';

export default defineComponent({
  name: 'MainWindow',
  components: {
    SplashPage,
  },
});
</script>

<style scoped lang="scss">
.main-window {
  /* Add your styling for the main window here */
}
</style>
