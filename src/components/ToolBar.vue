<!-- src/components/ToolBar.vue -->
<template>
  <q-toolbar class="bg-primary">
    <q-btn-group>
      <!-- Buttons for brush effects go here -->
    </q-btn-group>
    <q-space />
    <q-color-picker v-model="currentColor" />
  </q-toolbar>
</template>

<script>
export default {
  data() {
    return {
      currentColor: "#000000",
    };
  },
  provide() {
    return {
      currentColor: this.currentColor,
    };
  },
};
</script>
