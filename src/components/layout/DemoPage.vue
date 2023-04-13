<template>
  <div>
    <h1>Demo Page</h1>
    <p>Count: {{ count }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useMyStore } from '@/stores';

export default defineComponent({
  setup() {
    const store = useMyStore();
    const count = store.count;

    return {
      count,
    };
  },
});
</script>
