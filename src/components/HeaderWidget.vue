<template>
  <q-header>
    <q-toolbar>
      <div class="header-widget">
        <q-btn
          class="toggle-button"
          label="Toggle Left Presets"
          @click="togglePresets('leftPreset')"
        />
        <q-btn
          class="collapse-button"
          label="Collapse Left"
          @click="toggleSidebar('left')"
        />
        <q-btn
          class="collapse-button"
          label="Collapse Right"
          @click="toggleSidebar('right')"
        />
        <q-btn
          class="toggle-button"
          label="Toggle Right Presets"
          @click="togglePresets('rightPreset')"
        />
      </div>
      <q-toolbar-title>KnightForge Wonderlab</q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeaderWidget',
  methods: {
    toggleSidebar(side) {
      this.$emit('toggleSidebar', side);
    },
    togglePresets(preset) {
      this.$emit('toggleSidebar', preset);
    },
  },
});
</script>

<style scoped lang="scss">
.q-header {
  background-color: $secondary;
  color: $accent;
}
.q-toolbar-title {
  font-weight: bold;
}
.toggle-button {
  background-color: blue;
  color: white;
}
.collapse-button {
  background-color: red;
  color: white;
}
</style>
