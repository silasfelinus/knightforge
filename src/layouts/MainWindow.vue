<template>
  <div class="main-window">
    <SplashPage />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SplashPage from './SplashPage.vue';

export default defineComponent({
  name: 'MainWindow',
  components: {
    SplashPage,
  },
});
</script>
