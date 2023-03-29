<template>
  <q-col cols="12" md="3" class="toolshed-section">
    <!-- Insert your ToolShed content here -->
    <QuasarButton label="Click Me!" @click="$emit('button-click')" />
    <RedSwitch v-model="switchValue" @change="onSwitchChange" />
  </q-col>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import QuasarButton from './QuasarButton.vue';
import RedSwitch from './RedSwitch.vue';

export default defineComponent({
  name: 'ToolshedWidget',
  components: {
    QuasarButton,
    RedSwitch,
  },
  setup() {
    const switchValue = ref(false);

    const onSwitchChange = (value: boolean) => {
      console.log('Switch value changed:', value);
    };

    return {
      switchValue,
      onSwitchChange,
    };
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
