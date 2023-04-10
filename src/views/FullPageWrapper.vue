<template>
  <div class="full-page-wrapper">
    <!-- Your other components will go here -->
    <slot></slot>
  </div>
</template>
<script>
export default {
  components: {},
};
</script>

<style scoped>
.full-page-wrapper {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: bisque;
}
</style>
