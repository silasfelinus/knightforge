<template>
  <q-col cols="12" md="3" class="toolshed-section">
    <!-- Insert your ToolShed content here -->
    <QuasarButton label="Click Me!" @click="$emit('button-click')" />
  </q-col>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import QuasarButton from './QuasarButton.vue';

export default defineComponent({
  name: 'ToolshedWidget',
  components: {
    QuasarButton,
  },
});
</script>

<style lang="scss">
.toolshed-section {
  flex: 1;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  margin: 5% 1.5%;
  position: relative;
  overflow: hidden;
}
</style>
