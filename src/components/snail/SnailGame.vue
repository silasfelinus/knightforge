<template>
  <div id="app">
    <Snail
      v-if="snailVisible"
      :speed="snailSpeed"
      @squashed="onSnailSquashed"
    />
    <Target />
    <div class="score">Score: {{ score }}</div>
  </div>
</template>

<script>
import Snail from './components/Snail.vue';
import Target from './components/Target.vue';

export default {
  components: {
    Snail,
    Target,
  },
  data() {
    return {
      snailVisible: false,
      snailSpeed: 1,
      score: 0,
    };
  },
  methods: {
    onSnailSquashed() {
      this.score++;
      this.snailSpeed += 0.5;
      this.spawnSnail();
    },
    spawnSnail() {
      this.snailVisible = false;
      setTimeout(() => {
        this.snailVisible = true;
      }, 1000);
    },
  },
  mounted() {
    this.spawnSnail();
  },
};
</script>
