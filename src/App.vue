<!-- App.vue -->
<template>
  <div id="app">
    <HeaderWidget />
    <main>
      <p class="warning-message">This is a warning message.</p>
    </main>
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
.warning-message {
  color: $warning;
  font-weight: bold;
}
</style>
