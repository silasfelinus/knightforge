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
    const messages = [
      'Welcome to the world of endless possibilities!',
      'Ready to turn your ideas into reality?',
      'Create magic without writing a single line of code!',
      'Unleash your creativity with WonderForge!',
      "Let's make something wonderful together!",
      'What if I told you coding just got a whole lot easier?',
      'Why just imagine, when you can create?',
      'Transform your ideas into interactive experiences!',
      "Buckle up! It's time for a coding adventure!",
      'No more coding barriers, just pure creativity!',
      'WonderForge: where dreams come to life!',
      'The future of web development starts here!',
      'Unveil the magic within you with WonderForge!',
      'Why code when you can converse?',
      'Turn your thoughts into action with WonderForge!',
      'Your coding genie awaits!',
      'Psst... Wanna know the secret to coding happiness?',
      'Welcome to the coding playground!',
      'The coding revolution starts with you!',
      'Prepare to be amazed by WonderForge!',
      'You dream it, we build it!',
      'Say hello to your new coding companion!',
      'Embark on a whimsical coding journey!',
      'Experience the joy of creation with WonderForge!',
      'The power of code is now at your fingertips!',
      'The only limit is your imagination!',
      'Dive into the world of interactive experiences!',
      'Are you ready for some coding magic?',
      'Witness the fusion of creativity and technology!',
      "It's time to unleash your inner coding wizard!",
    ];

    const randomIndex = Math.floor(Math.random() * messages.length);
    const message = ref(messages[randomIndex]);

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
