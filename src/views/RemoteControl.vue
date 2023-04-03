<template>
  <q-footer class="remote-control">
    <q-toolbar>
      <q-btn-group>
        <q-btn label="Toggle Night Mode" @click="toggleNightMode" />
        <!-- Add other buttons to control settings here -->
      </q-btn-group>
    </q-toolbar>
  </q-footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useAppStore } from '../stores/useAppStore';

export default defineComponent({
  name: 'RemoteControl',
  setup() {
    const appStore = useAppStore();
    const toggleNightMode = () => appStore.toggleNightMode();

    return {
      toggleNightMode,
    };
  },
});
</script>

<style scoped lang="scss">
.remote-control {
  background-color: $secondary;
  color: $primary;
}
</style>
