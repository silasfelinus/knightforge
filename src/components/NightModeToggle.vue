<template>
  <div class="night-mode-toggle">
    <label for="night-mode-checkbox">Night Mode</label>
    <input id="night-mode-checkbox" type="checkbox" :checked="nightMode" @change="$emit('toggle')" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NightModeToggle',
  props: {
    nightMode: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['toggle'],
});
</script>

<style scoped lang="scss">
.night-mode-toggle {
  // Add your styles for the night mode toggle container
}

label {
  // Add your styles for the label
}

input[type="checkbox"] {
  // Add your styles for the checkbox
}
</style>
