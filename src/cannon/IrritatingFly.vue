<template>
  <div
    class="irritating-fly"
    :style="flyStyle"
    @click="
      swatFly();
      $emit('fly-hit');
    "
  ></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

type FlyStyle = {
  position: 'fixed';
  width: '20px';
  height: '20px';
  backgroundColor: 'black' | 'gray';
  borderRadius: '50%';
  transform: string;
  transition?: string;
};

export default defineComponent({
  data() {
    return {
      isAlive: true,
      flyStyle: {
        position: 'fixed',
        width: '20px',
        height: '20px',
        backgroundColor: 'black',
        borderRadius: '50%',
        transform: `translate(${Math.random() * (window.innerWidth - 50)}px, ${
          Math.random() * (window.innerHeight - 50)
        }px)`,
      } as FlyStyle,
    };
  },
  methods: {
    swatFly() {
      if (!this.isAlive) return;

      this.isAlive = false;
      this.flyStyle = {
        ...this.flyStyle,
        transform: `translate(${this.flyStyle.transform
          .split(',')[0]
          .slice(10)}, ${window.innerHeight - 50}px)`,
        transition: 'transform 2s',
        backgroundColor: 'gray',
      };
    },
    async playSoundEffect(soundFile: string) {
      const soundModule = await import(`@/assets/${soundFile}`);
      const audio = new Audio(soundModule.default);
      audio.play();
    },
  },
});
</script>

<style scoped>
.irritating-fly {
  transition: transform 0.1s;
}
</style>
