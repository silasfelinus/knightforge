<template>
  <div :class="{ 'night-mode': nightMode, home: true }">
    <q-header class="header">
      <q-toolbar>
        <q-toolbar-title class="text-h4">WonderForge</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <div class="content">
      <h1 class="text-h3 q-mb-lg">Welcome to WonderForge</h1>
      <p class="text-h5 q-mb-xl">
        A really pleasing GUI sandbox for coding projects
      </p>
      <div class="row q-gutter-md images-container">
        <SplashImage
          v-for="image in splashImages"
          :key="image.id"
          :src="image.default"
          :alt="image.alt"
          class="splash-image"
        />
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
import SplashImage from '@/views/SplashImage.vue';

export default defineComponent({
  name: 'HomePage',
  setup() {
    const nightMode = ref(false);
    const imagePaths = [
      '../../assets/splash/splash00.png',
      '../../assets/splash/splash01.png',
      '../../assets/splash/secret00.png',
      '../../assets/splash/secret01.png'
    ];

    const imageImports = imagePaths.reduce((acc, path) => {
      acc[path] = import(path).catch(error => {
        console.error(`Failed to load ${path}:`, error);
      });
      return acc;
    }, {});

    const splashImages = imagePaths.map((path, index) => {
      return {
        id: index + 1,
        src: imageImports[path]?.default,
        alt: index < 2 ? `Splash Image 0${index}` : `Secret Image 0${index - 2}`
      };
    });

    const toggleNightMode = () => {
      nightMode.value = !nightMode.value;
    };

    return {
      nightMode,
      splashImages,
      toggleNightMode,
      SplashImage
    };
  }
});
</script>

<style lang="scss">
.night-mode {
  background-color: #333;
  color: #f0f0f0;
}

.header,
.footer {
  z-index: 1;
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

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
