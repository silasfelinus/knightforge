<template>
  <q-toolbar class="title-bar">
    <q-btn
      flat
      round
      dense
      class="q-mr-sm"
      @click="$emit('toggle-left-sidebar')"
    >
      <q-icon name="menu" />
    </q-btn>
    <q-toolbar-title class="text-h5">WonderForge</q-toolbar-title>
  </q-toolbar>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TitleBar',
  emits: ['toggle-left-sidebar'],
});
</script>

<style scoped lang="scss">
.title-bar {
  background-color: $primary;
  color: $secondary;
}
</style>
