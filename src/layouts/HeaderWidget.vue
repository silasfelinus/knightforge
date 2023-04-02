<!-- HeaderWidget.vue -->
<template>
  <header>
    <h1>WonderForge</h1>
  </header>
</template>

<script lang="ts">
export default {
  name: 'HeaderWidget',
};
</script>

<style scoped lang="scss">
.header-widget {
  background: $primary;
  border-bottom: 1px solid $secondary;
}

.header-title {
  font-size: 1.5rem;
  font-weight: 500;
}
</style>
