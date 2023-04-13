<template>
  <div class="game-screen">
    <component
      v-for="(child, index) in children"
      :key="index"
      :is="child"
    ></component>
  </div>
</template>

<script>
export default {
  name: 'GameSCreen',
  props: {
    children: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
