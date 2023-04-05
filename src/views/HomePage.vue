<template>
  <div :class="{ 'night-mode': nightMode, home: true }">
    <h1 class="text-h3 q-mb-lg">Welcome to WonderForge</h1>
    <p class="text-h5 q-mb-xl">
      A really pleasing GUI sandbox for coding projects
    </p>
    <div class="row q-gutter-md images-container">
      <q-img
        v-for="image in splashImages"
        :key="image.id"
        :src="image.default"
        :alt="image.alt"
        class="splash-image"
      />
    </div>
    <q-btn
      class="toggle-button q-mt-xl"
      color="primary"
      @click="toggleNightMode"
    >
      Toggle Night Mode
    </q-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { QImg, QBtn } from 'quasar';

interface ImageImport {
  default: string;
  id: number;
  alt: string;
}

export default defineComponent({
  name: 'HomePage',
  components: {
    QImg,
    QBtn,
  },
  setup() {
    const nightMode = ref(false);

    const imagePaths = [
      '../assets/splash/splash00.png',
      '../assets/splash/splash01.png',
      '../assets/splash/splash05.png',
      '../assets/splash/splash04.png',
    ];

    const loadImages = async () => {
      const imageImports: ImageImport[] = await Promise.all(
        imagePaths.map((path, index) =>
          import(/* @vite-ignore */ path).then((img) => ({
            default: img.default,
            id: index + 1,
            alt:
              index < 2
                ? `Splash Image 0${index}`
                : `Secret Image 0${index - 2}`,
          }))
        )
      );

      return imageImports;
    };

    const splashImages = ref<ImageImport[]>([]);

    loadImages().then((images) => {
      splashImages.value = images;
    });

    const toggleNightMode = () => {
      nightMode.value = !nightMode.value;
    };

    return {
      nightMode,
      splashImages,
      toggleNightMode,
    };
  },
});
</script>
<style scoped>
.night-mode {
  background-color: #333;
  color: #f0f0f0;
}

.text-h3,
.text-h5 {
  text-align: center;
}

.images-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.splash-image {
  max-width: 20%;
  padding: 1rem;
}

.toggle-button {
  display: block;
  margin: 2rem auto;
}

/* Add the following CSS to make the content fit in one page */
html,
body {
  height: 100%;
}

#q-app {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.home {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
