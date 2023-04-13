<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useMyStore } from '@/stores';

export default defineComponent({
  setup() {
    const store = useMyStore();
    store.increment();
    console.log('Count:', store.count);
    return {};
  },
});
</script>

<style scoped>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
