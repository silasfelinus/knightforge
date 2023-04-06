<template>
  <ButterflyEffectWrapper />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ButterflyEffectWrapper from '../butterfly/ButterflyEffectWrapper.vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    ButterflyEffectWrapper,
  },
});
</script>
