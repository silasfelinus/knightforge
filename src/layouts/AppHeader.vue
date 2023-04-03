<template>
  <q-header>
    <TitleBar />
  </q-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TitleBar from '../pages/TitleBar.vue';

export default defineComponent({
  name: 'AppHeader',
  components: {
    TitleBar,
  },
});
</script>
