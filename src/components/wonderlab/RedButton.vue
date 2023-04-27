<template>
  <button class="red-button" @click="clickHandler">Click me!</button>
</template>

<script lang="ts">
export default {
  methods: {
    clickHandler() {
      this.$emit('buttonClicked');
    },
  },
};
</script>
