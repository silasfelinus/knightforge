<template>
  <q-drawer v-model="componentVisibility" show-if-above :side="side">
    <slot />
  </q-drawer>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'AppSidebar',
  props: {
    componentVisibility: {
      type: Boolean,
      required: true,
    },
    side: {
      type: String as PropType<'left' | 'right'>,
      default: 'left',
    },
  },
});
</script>
