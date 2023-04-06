<template>
  <div>
    <ButterflyMascot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ButterflyMascot from './ButterflyMascot.vue';

export default defineComponent({
  name: 'ButterflyEffectWrapper',
  components: {
    ButterflyMascot,
  },
});
</script>
