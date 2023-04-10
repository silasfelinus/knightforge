<template>
  <div class="splash-message">
    {{ message }}
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'SplashMessage',
  setup() {
    const positiveWords = [
      'wonderful',
      'amazing',
      'awesome',
      'fantastic',
      'incredible',
      'innovative',
      'magical',
      'creative',
    ];

    const adjectives = [
      'endless',
      'interactive',
      'whimsical',
      'exciting',
      'extraordinary',
      'limitless',
      'inspiring',
      'astonishing',
    ];

    const verbs = [
      'explore',
      'unveil',
      'experience',
      'transform',
      'embark on',
      'dive into',
      'witness',
      'create',
    ];
    const frameworks = [
      () =>
        `Are you ready to ${getRandomElement(verbs)} the ${getRandomElement(
          adjectives
        )} world of ${getRandomElement(
          positiveWords
        )} possibilities with WonderForge?`,
      () =>
        `Welcome to the ${getRandomElement(adjectives)} and ${getRandomElement(
          positiveWords
        )} world of WonderForge!`,
      () =>
        `Experience ${getRandomElement(positiveWords)} ${getRandomElement(
          adjectives
        )} creations with WonderForge!`,
      () =>
        `Join us in the ${getRandomElement(
          adjectives
        )} journey of ${getRandomElement(positiveWords)} web development!`,
      () =>
        `Unleash your ${getRandomElement(
          positiveWords
        )} creativity with ${getRandomElement(adjectives)} WonderForge!`,
      () =>
        `Discover ${getRandomElement(adjectives)} ways to ${getRandomElement(
          verbs
        )} ${getRandomElement(positiveWords)} projects!`,
      () =>
        `Let's ${getRandomElement(verbs)} the ${getRandomElement(
          adjectives
        )} magic of ${getRandomElement(positiveWords)} coding together!`,
      () =>
        `Dive into the ${getRandomElement(
          positiveWords
        )} world of ${getRandomElement(
          adjectives
        )} web development with WonderForge!`,
      () =>
        `WonderForge: your ${getRandomElement(
          adjectives
        )} gateway to ${getRandomElement(positiveWords)} creations!`,
      () =>
        `Turn your ${getRandomElement(
          positiveWords
        )} ideas into ${getRandomElement(
          adjectives
        )} reality with WonderForge!`,
      () =>
        `Bring your ${getRandomElement(
          adjectives
        )} imagination to life with ${getRandomElement(
          positiveWords
        )} WonderForge!`,
      () =>
        `It's time to ${getRandomElement(verbs)} the ${getRandomElement(
          adjectives
        )} secrets of ${getRandomElement(positiveWords)} web development!`,
      () =>
        `The ${getRandomElement(positiveWords)} world of ${getRandomElement(
          adjectives
        )} web development awaits you!`,
      () =>
        `Are you ready to ${getRandomElement(verbs)} the ${getRandomElement(
          positiveWords
        )} power of ${getRandomElement(adjectives)} WonderForge?`,
      () =>
        `Join the ${getRandomElement(
          adjectives
        )} revolution in ${getRandomElement(positiveWords)} web development!`,
      () =>
        `Master the art of ${getRandomElement(
          positiveWords
        )} ${getRandomElement(adjectives)} web development with WonderForge!`,
    ];
    const getRandomElement = (array) => {
      return array[Math.floor(Math.random() * array.length)];
    };

    const generateMessage = () => {
      const randomFramework =
        frameworks[Math.floor(Math.random() * frameworks.length)];
      return randomFramework();
    };

    const message = ref(generateMessage());

    return {
      message,
    };
  },
});
</script>

<style scoped>
.splash-message {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin-top: 2rem;
}
</style>
