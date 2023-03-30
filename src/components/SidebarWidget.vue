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

<style scoped lang="scss">
.preset1 {
  background-color: $primary;
}
.preset2 {
  background-color: $secondary;
}
.preset3 {
  background-color: $accent;
}
.preset4 {
  background-color: $warning;
}

.sidebar {
  height: 100%;
  padding: 16px;
}
</style>
