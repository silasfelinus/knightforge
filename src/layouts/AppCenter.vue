<template>
  <q-page-container class="app-center">
    <router-view />
  </q-page-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppCenter',
});
</script>

<style scoped lang="scss">
.app-center {
  background-color: $secondary;
  min-height: calc(
    100vh - 100px
  ); // Adjust the value according to the height of the header and footer
  padding: 16px;
}
</style>
