<template>
  <div class="sidebar" :class="preset">
    <q-toolbar>
      <q-toolbar-title>Sidebar - {{ preset }}</q-toolbar-title>
    </q-toolbar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SidebarWidget',
  props: {
    side: {
      type: String,
      required: true,
    },
    preset: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
.preset1 {
  background-color: #f44336;
}
.preset2 {
  background-color: #2196f3;
}
.preset3 {
  background-color: #4caf50;
}
.preset4 {
  background-color: #ffeb3b;
}

.sidebar {
  height: 100%;
  padding: 16px;
}
</style>
