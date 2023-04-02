<template>
  <q-header class="header-widget">
    <q-toolbar>
      <q-toolbar-title class="header-title">{{
        appStore.headerTitle
      }}</q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useAppStore } from '../stores/app';

export default defineComponent({
  name: 'HeaderWidget',
  components: {
  },
  setup() {
    const appStore = useAppStore();

    return {
      appStore,
    };
  },
});
</script>

<style scoped lang="scss">
.header-widget {
  background: $primary;
  border-bottom: 1px solid $secondary;
}

.header-title {
  font-size: 1.5rem;
  font-weight: 500;
}
</style>
