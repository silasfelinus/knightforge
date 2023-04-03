<template>
  <q-footer>
    <RemoteControl />
  </q-footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RemoteControl from '../views/RemoteControl.vue';

export default defineComponent({
  name: 'AppFooter',
  components: {
    RemoteControl,
  },
});
</script>
