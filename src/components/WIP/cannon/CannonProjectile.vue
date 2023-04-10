<template>
  <div class="cannon-projectile" :style="projectileStyle"></div>
</template>

<script lang="ts">
export default {
  props: {
    angle: Number,
    power: Number,
  },
  data() {
    return {
      projectileStyle: {},
    };
  },
  mounted() {
    this.launchProjectile();
  },
  methods: {
    launchProjectile() {
      // Add projectile launching logic here
    },
  },
};
</script>

<style scoped>
.cannon-projectile {
  position: fixed;
  width: 20px;
  height: 20px;
  background-color: #000;
  border-radius: 50%;
}
</style>
