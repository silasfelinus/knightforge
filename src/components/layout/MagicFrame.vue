<template>
  <div class="magic-frame">
    <component
      v-for="(child, index) in children"
      :key="index"
      :is="child"
    ></component>
  </div>
</template>

<script>
export default {
  name: 'MagicFrame',
  props: {
    children: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
