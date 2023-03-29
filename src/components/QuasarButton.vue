<template>
  <q-btn :label="label" @click="onClick" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'QuasarButton',
  props: {
    label: {
      type: String,
      required: true,
    },
  },
  emits: ['click'],
  setup(props, { emit }) {
    function onClick() {
      emit('click');
    }

    return {
      onClick,
    };
  },
});
</script>
