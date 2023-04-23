<template>
  <div class="sign-container">
    <div v-for="(letter, index) in letters" :key="index" class="wooden-sign">
      <span class="letter">{{ letter }}</span>
    </div>
    <ButterflyHorde :number="50" @wind-reached="spinLetters" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ButterflyHorde from './ButterflyWind.vue';

export default defineComponent({
  name: 'ComingSoonSign',
  components: {
    ButterflyHorde,
  },
  setup() {
    const letters = ['C', 'O', 'M', 'I', 'N', 'G', ' ', 'S', 'O', 'O', 'N'];

    function spinLetters() {
      const signs = document.querySelectorAll('.wooden-sign');
      signs.forEach((sign) => {
        sign.classList.add('spin');
      });
    }

    return { letters, spinLetters };
  },
});
</script>

<style scoped>
.sign-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;
}

.wooden-sign {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: #8b4513;
  border: 1px solid #5a351e;
  padding: 20px;
  margin: 5px;
  border-radius: 5px;
  transition: transform 1s;
}

.wooden-sign.spin {
  transform: rotate(360deg);
}

.letter {
  font-size: 36px;
  font-weight: bold;
  color: #ffffff;
}
</style>
