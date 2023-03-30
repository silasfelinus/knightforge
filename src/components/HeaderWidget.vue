<template>
  <div class="header-widget">
    <div class="header-title">{{ title }}</div>
    <NavigationWidget @changePreset="$emit('changePreset', $event)" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavigationWidget from './nav/NavigationWidget.vue';

export default defineComponent({
  name: 'HeaderWidget',
  components: {
    NavigationWidget,
  },
  props: {
    title: {
      type: String,
      default: 'Wonderforge',
    },
  },
});
</script>

<style scoped>
.header-widget {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.header-title {
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  padding: 0.5rem;
  background: #f0f0f0;
  border-bottom: 1px solid #e0e0e0;
}
</style>
