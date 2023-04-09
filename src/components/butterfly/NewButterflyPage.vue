<template>
  <div id="app">
    <butterfly v-for="i in 20" :key="i" />
  </div>
</template>

<script>
import Butterfly from './NewButterfly.vue';

export default {
  components: {
    Butterfly,
  },
};
</script>

<style>
#app {
  background: #111;
}
</style>
