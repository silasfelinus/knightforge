<template>
  <div class="header-widget">
    <q-toolbar class="header-toolbar" color="primary">
      <q-btn
        flat
        dense
        round
        icon="menu"
        aria-label="Toggle side menu"
        @click="toggleSideMenu"
      />
      <q-toolbar-title class="header-title">
        Knightforge Wonderlab
      </q-toolbar-title>
      <q-space />
      <div class="header-actions">
        <q-btn label="Login" class="header-button" />
        <q-btn label="Sign up" color="secondary" class="header-button" />
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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 6; // Make sure this value is higher than the z-index of .side-widget
}
.header-toolbar {
  height: 64px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-title {
  font-size: 24px;
  font-weight: bold;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.header-button {
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
}
</style>
