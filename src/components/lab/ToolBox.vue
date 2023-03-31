<!-- src/components/ToolBar.vue -->
<template>
  <q-toolbar class="bg-primary">
    <q-btn-group>
      <q-btn icon="brush" @click="selectBrush('normal')" label="Normal" />
      <q-btn icon="format_paint" @click="selectBrush('thick')" label="Thick" />
      <q-btn
        icon="format_color_fill"
        @click="selectBrush('dotted')"
        label="Dotted"
      />
    </q-btn-group>
    <q-space />
    <q-color-picker v-model="currentColor" />
  </q-toolbar>
</template>

<script>
export default {
  data() {
    return {
      currentColor: '#000000',
      currentBrush: 'normal',
    };
  },
  methods: {
    selectBrush(brush) {
      this.currentBrush = brush;
    },
  },
  provide() {
    return {
      currentColor: this.currentColor,
      currentBrush: this.currentBrush,
    };
  },
};
</script>
