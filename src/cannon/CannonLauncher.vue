<template>
  <div class="cannon-launcher">
    <div class="cannon" :style="cannonStyle"></div>
    <cannon-projectile
      v-if="projectileVisible"
      :angle="cannonAngle"
      :power="cannonPower"
      ref="cannonProjectile"
    ></cannon-projectile>
  </div>
</template>

<script>
import CannonProjectile from './CannonProjectile.vue';

export default {
  components: {
    CannonProjectile,
  },
  data() {
    return {
      cannonAngle: 0,
      cannonPower: 1,
      projectileVisible: false,
    };
  },
  computed: {
    cannonStyle() {
      return {
        transform: `rotate(${this.cannonAngle}deg)`,
      };
    },
  },
  methods: {
    rotateCannon(direction) {
      this.cannonAngle += direction;
    },
    shootCannonball() {
      if (this.projectileVisible) return;
      this.projectileVisible = true;
      this.$refs.cannonProjectile.launchProjectile();
      this.playSoundEffect('cannon_fire.mp3');
    },
    async playSoundEffect(soundFile) {
      const soundModule = await import(`@/assets/${soundFile}`);
      const audio = new Audio(soundModule.default);
      audio.play();
    },
  },
};
</script>

<style scoped>
.cannon-launcher {
  position: relative;
}

.cannon {
  position: absolute;
  width: 100px;
  height: 10px;
  background-color: black;
  transform-origin: right center;
}
</style>
