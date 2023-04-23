<template>
  <div class="splash-message">
    {{ message }}
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const messages = [
  'Dive into the ocean of creativity!',
  'Your canvas, your rules!',
  'Art is the language of the soul!',
  'Let your imagination take the wheel!',
  'Unleash the artist within you!',
  'Colors speak louder than words!',
  'Create your masterpiece!',
  'Digital art never felt so magical!',
  "Let's paint the world together!",
  'Creativity knows no bounds!',
  'No brush, no problem!',
  'Ready to create your next digital masterpiece?',
  'Pixels and passion, all in one place!',
  'Capture the essence of your imagination!',
  'Artistic freedom at your fingertips!',
  'Embrace the power of digital art!',
  'Paint the town with your digital brush!',
  'Create, explore, and inspire!',
  'Unveil the artist within!',
  'Dream big and create even bigger!',
];

const randomIndex = Math.floor(Math.random() * messages.length);
const message = ref(messages[randomIndex]);
</script>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SplashMessage',
  props: {},
  emits: {},
});
</script>

<style scoped>
.splash-message {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin-top: 2rem;
  z-index: 1;
}
</style>
