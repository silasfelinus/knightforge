<template>
  <q-footer>
    <q-toolbar>
      <q-toolbar-title>{{ title }}</q-toolbar-title>
      <RemoteWidget />
    </q-toolbar>
  </q-footer>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import RemoteWidget from '../components/RemoteWidget.vue';

export default defineComponent({
  name: 'FooterWidget',
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
.q-footer {
  background-color: $primary;
  color: $accent;
}
</style>
