<!-- TitleBar.vue -->
<template>
  <div class="title-bar">
    <div class="welcome">Welcome to</div>
    <div class="wonder">
      <div
        class="letter"
        v-for="(char, index) in wonderChars"
        :key="index"
        :class="'letter-' + (index + 1)"
      >
        {{ char }}
      </div>
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
  background-color: transparent;
  backdrop-filter: blur(10px);
  font-family: 'Roboto', sans-serif;
}

.welcome {
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  color: var(--quasar-grey-8);
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  margin-right: 10px;
}

.wonder {
  display: flex;
}

.letter {
  font-size: 36px;
  font-weight: bold;
  text-transform: uppercase;
  color: var(--quasar-primary-color);
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  margin-right: 2px;
}

.letter-1 {
  color: var(--quasar-primary-color-shade1);
}

.letter-2 {
  color: var(--quasar-primary-color-shade2);
}

.letter-3 {
  color: var(--quasar-primary-color-shade3);
}

.letter-4 {
  color: var(--quasar-primary-color-shade4);
}

.letter-5 {
  color: var(--quasar-primary-color-shade5);
}

.letter-6 {
  color: var(--quasar-primary-color-shade6);
}

.forge {
  font-size: 36px;
  font-weight: bold;
  text-transform: uppercase;
  color: var(--quasar-grey-8);
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
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
