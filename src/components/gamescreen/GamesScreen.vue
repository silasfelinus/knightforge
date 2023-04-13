<template>
  <div class="game-screen">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GameScreen',
});
</script>

<style lang="scss">
.game-screen {
  width: 100%;
  height: 100%;
}
</style>
