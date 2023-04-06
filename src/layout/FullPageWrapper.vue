<template>
  <div class="full-page-wrapper">
    <magic-screen></magic-screen>
    <!-- Your other components will go here -->
  </div>
</template>
<script>
import MagicScreen from './MagicScreenJS.vue';

export default {
  components: {
    MagicScreen,
  },
};
</script>

<style scoped>
.full-page-wrapper {
  position: relative;
  width: 100%;
  min-height: 100vh;
}
</style>
