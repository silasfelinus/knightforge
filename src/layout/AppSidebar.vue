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
    modelValue: {
      type: Boolean,
      required: true
    },
    side: {
      type: String as PropType<'left' | 'right'>,
      default: 'left'
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const visibility = ref(props.modelValue);

    watch(visibility, (newValue, oldValue) => {
      if (newValue !== oldValue) {
        emit('update:modelValue', newValue);
      }
    });

    return {
      visibility
    };
  }
});
</script>
