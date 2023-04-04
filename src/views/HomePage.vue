<template>
  <div>
    <h1>Home Page</h1>
    <button @click="toggleNightMode">Toggle Night Mode</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'HomePage',
  setup() {
    const nightMode = ref(false);

    const toggleNightMode = () => {
      nightMode.value = !nightMode.value;
    };

    return {
      toggleNightMode,
    };
  },
});
</script>
