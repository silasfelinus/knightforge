<template>
  <q-footer>
    <q-toolbar>
      <q-toolbar-title>{{ title }}</q-toolbar-title>
    </q-toolbar>
  </q-footer>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FooterWidget',
  components: {},
  props: {
    title: {
      type: String,
      default: 'Wonderforge',
    },
  },
});
</script>
<style lang="scss">
.q-footer {
  background-color: $primary;
  color: $accent;
}
</style>
