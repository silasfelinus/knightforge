<template>
  <q-header class="header-widget">
    <q-toolbar>
      <q-toolbar-title class="header-title">{{ title }}</q-toolbar-title>
      <RemoteWidget />
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import RemoteWidget from './RemoteWidget.vue';

export default defineComponent({
  name: 'HeaderWidget',
  components: {
    RemoteWidget,
  },
  setup() {
    const store = useStore();

    const title = computed(() => store.state.headerTitle);

    return {
      title,
    };
  },
});
</script>

<style scoped>
.header-widget {
  background: $primary;
  border-bottom: 1px solid $secondary;
}

.header-title {
  font-size: 1.5rem;
  font-weight: 500;
}
</style>
