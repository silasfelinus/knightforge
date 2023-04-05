<template>
  <div id="app">
    <generic-navbar></generic-navbar>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import GenericNavbar from '@/components/GenericNavbar.vue';

export default {
  name: 'App',
  components: {
    GenericNavbar,
  },
};
</script>

<style lang="scss">
/* Add global styles */
</style>
