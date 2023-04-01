<template>
  <div @click="changeImage" class="splash-viewer">
    <transition name="flip-down">
      <img :key="currentImage" :src="currentImageUrl" alt="Splash Image" />
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [],
      currentImage: '',
    };
  },
  computed: {
    currentImageUrl() {
      return require(`@/assets/splash/${this.currentImage}`);
    },
  },
  methods: {
    changeImage() {
      const nextIndex =
        (this.images.indexOf(this.currentImage) + 1) % this.images.length;
      this.currentImage = this.images[nextIndex];
    },
    loadImages() {
      const requireImages = require.context(
        '@/assets/splash/',
        false,
        /\.(png)$/
      );

      this.images = requireImages
        .keys()
        .map((fileName) => fileName.replace('./', ''));
    },
  },
  mounted() {
    this.loadImages();
    this.currentImage = this.images[Math.floor(Math.random() * this.images.length)];
  },
};
</script>


<style scoped>
.splash-viewer {
  cursor: pointer;
}

.flip-down-enter-active,
.flip-down-leave-active {
  transition: transform 0.5s;
  backface-visibility: hidden;
  perspective: 1000;
}

.flip-down-enter,
.flip-down-leave-to {
  transform: rotateX(-90deg);
}
</style>
