<template>
  <q-footer>
    <q-toolbar>
      <q-toolbar-title>{{ title }}</q-toolbar-title>
      <RemoteControl />
    </q-toolbar>
  </q-footer>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import RemoteControl from '../components/screenspace/RemoteControl.vue';

export default defineComponent({
  name: 'FooterWidget',
  components: {
    RemoteControl,
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
