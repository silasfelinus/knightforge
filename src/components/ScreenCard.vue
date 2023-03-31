<template>
  <q-card class="screen-card">
    <q-toolbar>
      <q-toolbar-title>{{ widgetTitle }}</q-toolbar-title>
    </q-toolbar>
    <q-card-section>
      <component :is="currentComponent || 'div'"></component>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ScreenCard',
  props: {
    widgetTitle: {
      type: String,
      default: '',
    },
    currentComponent: {
      type: Object,
      default: null,
    },
  },
});
</script>

<style scoped>
.screen-card {
  flex: 1;
  display: flex;
  flex-direction: column;
}

q-card-section {
  flex: 1;
}
</style>
