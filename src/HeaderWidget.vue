<template>
  <q-header>
    <q-toolbar>
      <q-btn flat dense round icon="menu" @click="$emit('toggle-sidebar')" />
      <q-toolbar-title>KnightForge Wonderlab</q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeaderWidget',
});
</script>

<style scoped>
@import './css/quasar.variables.scss';

.q-header {
  background-color: $secondary;
  color: $white;
}

.q-toolbar-title {
  font-weight: bold;
}
</style>
