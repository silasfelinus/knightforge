<template>
  <div class="two-player-game">
    <div class="score-board">
      <div>Player 1: {{ player1Score }}</div>
      <div>Player 2: {{ player2Score }}</div>
    </div>
    <cannon-launcher
      v-if="playerTurn === 1"
      @projectile-fired="projectileFired"
      ref="cannonLauncher1"
    ></cannon-launcher>
    <cannon-launcher
      v-if="playerTurn === 2"
      @projectile-fired="projectileFired"
      ref="cannonLauncher2"
    ></cannon-launcher>
    <irritating-fly
      v-for="(fly, index) in flies"
      :key="index"
      @fly-hit="addPoint"
    ></irritating-fly>
    <!-- Add obstacles and power-ups here -->
  </div>
</template>

<script lang="ts">
import CannonLauncher from './CannonLauncher.vue';
import IrritatingFly from './IrritatingFly.vue';

export default {
  components: {
    CannonLauncher,
    IrritatingFly,
  },
  data() {
    return {
      player1Score: 0,
      player2Score: 0,
      playerTurn: 1,
      flies: 3,
    };
  },
  methods: {
    addPoint() {
      if (this.playerTurn === 1) {
        this.player1Score++;
      } else {
        this.player2Score++;
      }
      this.switchTurn();
    },
    switchTurn() {
      this.playerTurn = this.playerTurn === 1 ? 2 : 1;
    },
    projectileFired() {
      this.switchTurn();
    },
  },
};
</script>

<style scoped>
.two-player-game {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.score-board {
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 10px;
  font-size: 24px;
}
</style>
