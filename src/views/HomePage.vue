<template>
  <div :class="{ 'night-mode': nightMode }">
    <h1 class="title">Welcome to WonderForge</h1>
    <p class="subtitle">
      The ultimate GUI sandbox for designing and prototyping coding projects
    </p>
    <div class="images-container">
      <img
        v-for="image in splashImages"
        :key="image.id"
        :src="image.src"
        :alt="image.alt"
        class="splash-image"
      />
    </div>
    <q-btn class="toggle-button" color="primary" @click="toggleNightMode">
      Toggle Night Mode
    </q-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

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
      toggleNightMode
    };
  }
});
</script>

<style lang="scss">
.title {
  font-size: 3em;
  font-weight: bold;
  text-align: center;
  margin: 1.5em 0;
}

.subtitle {
  font-size: 1.5em;
  text-align: center;
  margin-bottom: 2em;
}

.images-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1em;
  margin-bottom: 2em;
}

.splash-image {
  max-width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.toggle-button {
  display: block;
  margin: 0 auto;
}

.night-mode {
  background-color: #212121;
  color: #fff;
}
</style>
