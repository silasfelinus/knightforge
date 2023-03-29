<template>
  <div
    :class="[
      'main-widget',
      { 'collapsed-right': collapsedRight, 'collapsed-left': collapsedLeft },
    ]"
  >
    <!-- Main widget content -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainWidget',
  props: {
    collapsedRight: {
      type: Boolean,
      required: true,
    },
    collapsedLeft: {
      type: Boolean,
      required: true,
    },
  },
});
</script>

<style lang="scss">
.main-widget {
  flex-grow: 1;
}

.collapsed-right {
  margin-right: 150px; // Adjust the margin to account for the expanded right sidebar
}

.collapsed-left {
  margin-left: 150px; // Adjust the margin to account for the expanded left sidebar
}
</style>
