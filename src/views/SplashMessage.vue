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
      "Get ready to code like you've never coded before!",
      'Transform your digital dreams into reality!',
      'Welcome to the code-venture of a lifetime!',
      'Discover the joy of code-free creation!',
      'Dazzle yourself with the magic of WonderForge!',
      'Let your imagination run wild and free!',
      'Enter the enchanting world of coding delight!',
      'No coding skills? No problem! We’ve got you covered!',
      'Welcome to the realm where coding is a breeze!',
      'Your coding fairy godmother is here!',
      "What's cooking, good looking? Ready to code?",
      'Hop on the coding roller coaster with WonderForge!',
      'A whole new world of coding awaits you!',
      'Be the coding superstar you always wanted to be!',
      'Ignite the spark of creativity with WonderForge!',
      'Ready, set, create with WonderForge!',
      'Dream big, code bigger with WonderForge!',
      'Unlock the door to the coding treasure trove!',
      'Coding has never been this much fun!',
      'Your ticket to the coding wonderland is here!',
      'Surf the waves of code with WonderForge!',
      'Discover the art of code-free magic!',
      'Ready to embark on a code-tastic voyage?',
      'Join the code party with WonderForge!',
      'Fasten your seatbelt for a coding odyssey!',
      'Explore the universe of code with WonderForge!',
      'Swoop into the thrilling world of coding!',
      'Jump-start your coding journey with WonderForge!',
      'WonderForge: The ultimate coding playground!',
      'Your coding dreams are just a click away!',
      'Prepare for liftoff in the world of coding!',
      'Coding made easy, fun, and fabulous!',
      'No more coding headaches, just creative freedom!',
      'Ready to paint the digital canvas with your ideas?',
      'Spin the wheel of coding fortune!',
      'Set sail on a coding voyage with WonderForge!',
      'Time to turn on the coding charm!',
      'Let your coding dreams take flight with WonderForge!',
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
