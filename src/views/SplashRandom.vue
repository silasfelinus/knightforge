// components/SplashRandom.vue
<template>
  <div>
    <img :src="randomImage" alt="Random Splash" />
  </div>
</template>

<script>
export default {
  name: 'SplashRandom',
  data() {
    return {
      randomImage: '',
    };
  },
  created() {
    this.loadRandomImage();
  },
  methods: {
    loadRandomImage() {
      const requireContext = require.context(
        '../assets/random/',
        false,
        /\.png$/
      );
      const images = requireContext.keys().map(requireContext);
      const randomIndex = Math.floor(Math.random() * images.length);
      this.randomImage = images[randomIndex];
    },
  },
};
</script>
