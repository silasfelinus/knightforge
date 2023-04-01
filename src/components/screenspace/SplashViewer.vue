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
