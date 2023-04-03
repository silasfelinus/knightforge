<template>
  <q-drawer v-model="visibility" show-if-above :side="side">
    <slot />
  </q-drawer>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue';

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
  emits: ['update:componentVisibility'], // Add this line
  setup(props, { emit }) {
    const visibility = ref(props.componentVisibility);

    watch(visibility, (newValue, oldValue) => {
      if (newValue !== oldValue) {
        emit('update:componentVisibility', newValue);
      }
    });

    return {
      visibility,
    };
  },
});
</script>
