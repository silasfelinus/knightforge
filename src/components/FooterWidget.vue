<template>
  <q-header>
    <q-toolbar>
      <q-toolbar-title>{{ title }}</q-toolbar-title>
      <RemoteWidget />
    </q-toolbar>
  </q-header>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import RemoteWidget from './RemoteWidget.vue';

export default defineComponent({
  name: 'HeaderWidget',
  components: {
    RemoteWidget,
  },
  props: {
    title: {
      type: String,
      default: 'Wonderforge',
    },
  },
});
</script>
<style lang="scss">
.q-header {
  background-color: $primary;
  color: $accent;
}
</style>
