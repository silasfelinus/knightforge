<template>
  <q-footer>
    <q-toolbar>
      <q-toolbar-title>Footer</q-toolbar-title>
    </q-toolbar>
  </q-footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FooterWidget',
});
</script>

<style lang="scss">
.q-footer {
  background-color: $secondary;
  color: $accent;
}
</style>
