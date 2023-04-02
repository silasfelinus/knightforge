<!-- App.vue -->
<template>
  <div id="app">
    <HeaderWidget />
    <router-view />
    <FooterWidget />
  </div>
</template>

<script>
import HeaderWidget from '@/layouts/HeaderWidget.vue';
import FooterWidget from '@/layouts/FooterWidget.vue';

export default {
  name: 'App',
  components: {
    HeaderWidget,
    FooterWidget,
  },
};
</script>

<style scoped lang="scss">
@import './css/quasar.variables';
</style>
