<template>
  <MagicScreen ref="magicFrame" @mounted="setFrameId">
    <div class="display-screen">
      <slot></slot>
    </div>
  </MagicScreen>
</template>

<script>
import MagicScreen from './MagicScreen.vue';

export default {
  components: {
    MagicScreen,
  },
  data() {
    return {
      frameId: null,
    };
  },
  methods: {
    setFrameId(id) {
      this.frameId = id;
    },
  },
};
</script>

<style scoped>
.display-screen {
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
