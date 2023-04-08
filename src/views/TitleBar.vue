<template>
  <div class="title-bar">
    <div
      class="letter"
      v-for="(char, index) in wonderChars"
      :key="index"
      :class="'letter-' + (index + 1)"
    >
      {{ char }}
    </div>
    <div class="forge">FORGE</div>
  </div>
</template>

<style scoped>
.title-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: #f0f0f0;
  font-family: 'Comic Sans MS', cursive, sans-serif;
}

.letter {
  font-size: 48px;
  font-weight: bold;
  text-transform: uppercase;
}

.letter-1 {
  color: #f44336;
}

.letter-2 {
  color: #ff9800;
}

.letter-3 {
  color: #ffeb3b;
}

.letter-4 {
  color: #4caf50;
}

.letter-5 {
  color: #2196f3;
}

.letter-6 {
  color: #9c27b0;
}

.forge {
  font-size: 48px;
  font-weight: bold;
  text-transform: uppercase;
  color: #4a4a4a;
  margin-left: 10px;
}
</style>

<script>
export default {
  name: 'TitleBar',
  data() {
    return {
      wonderChars: 'WONDER'.split(''),
    };
  },
};
</script>
