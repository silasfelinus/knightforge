<template>
  <div class="night-mode-toggle">
    <label for="night-mode-checkbox">Night Mode</label>
    <input
      id="night-mode-checkbox"
      type="checkbox"
      :checked="isNightMode"
      @change="$emit('toggle')"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NightModeToggle',
  props: {
    isNightMode: {
      type: Boolean,
      required: true
    }
  },
  emits: ['toggle']
});
</script>
