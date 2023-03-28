<template>
  <div class="header-widget">
    <q-toolbar class="bg-primary text-white">
      <q-btn flat dense round icon="menu" @click="toggleSideMenu" />
      <q-toolbar-title>Knightforge Wonderlab</q-toolbar-title>
      <q-space />
      <div class="header-actions">
        <!-- Add actions here -->
      </div>
    </q-toolbar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeaderWidget',
  methods: {
    toggleSideMenu() {
      this.$emit('toggle-side-menu');
    },
  },
});
</script>

<style lang="scss" scoped>
.header-widget {
  .q-toolbar {
    position: relative;
    z-index: 999;
    height: 64px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  .header-actions {
    display: flex;
    align-items: center;
    gap: 12px;
  }
}
</style>
