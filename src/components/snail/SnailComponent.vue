<template>
  <img
    src="@/assets/image/utility/snail.png"
    alt="snail"
    :style="{
      left: `${x}px`,
      top: `${y}px`,
      transition: `transform ${speed}s linear`,
    }"
    @click="squashSnail"
    ref="snail"
  />
</template>

<script>
export default {
  props: {
    speed: Number,
  },
  data() {
    return {
      x: 0,
      y: 0,
    };
  },
  methods: {
    squashSnail() {
      this.$emit('squashed');
    },
  },
  mounted() {
    this.spawnSnail();
  },
  watch: {
    speed() {
      this.spawnSnail();
    },
  },
};
</script>
