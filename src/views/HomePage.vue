<template>
  <div :class="{ 'night-mode': nightMode, home: true }">
    <q-header class="header">
      <q-toolbar>
        <q-toolbar-title class="text-h4">WonderForge</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <div class="container">
      <h1></h1>
      <div class="gallery-wrap">
        <div
          v-for="(image, index) in splashImages"
          :key="image.id"
          :class="['item', `item-${index + 1}`]"
          :style="{ backgroundImage: `url(${image.default})` }"
        ></div>
      </div>
    </div>

    <q-footer class="footer">
      <q-toolbar>
        <q-space />
        <q-btn class="toggle-button" color="primary" @click="toggleNightMode">
          Toggle Night Mode
        </q-btn>
        <q-space />
      </q-toolbar>
    </q-footer>
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

.header,
.footer {
  z-index: 1;
}

.container {
  padding: 75px 0;
  margin: 0 auto;
  width: 900px;
}

h1 {
  position: relative;
  margin-bottom: 45px;
  font-family: 'Oswald', sans-serif;
  font-size: 44px;
  text-transform: uppercase;
  color: #424242;
}

.gallery-wrap {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 70vh;
}

.item {
  flex: 1;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: flex 0.8s ease;
}

.item:hover {
  flex: 7;
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
  justify-content: space-between;
}
</style>
