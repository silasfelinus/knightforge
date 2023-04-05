<template>
  <div id="app" :style="{ backgroundColor: backgroundColor }">
    <header class="header">
      <h1 class="project-title">WonderForge</h1>
      <div class="toggle-container">
        <button class="toggle-button" @click="toggleNightMode">
          Knight Mode ♞
        </button>
      </div>
    </header>

    <main class="content">
      <h1 class="welcome-title">Welcome to WonderForge</h1>
      <p class="welcome-subtitle">
        A really pleasing GUI sandbox for coding projects
      </p>
      <div class="container">
        <h1></h1>
        <accordion-gallery :image-paths="imagePaths"></accordion-gallery>
      </div>
      <MagicFrame :cards="generateScreenCards(splashImages)" />
    </main>

    <footer class="footer">
      <div class="toggle-container">
        <button class="toggle-button" @click="toggleNightMode">
          Toggle Night Mode
        </button>
      </div>
      <div class="footer-links">
        <a href="#">Cafe Fred</a>
        <a href="#">Cafe Purr</a>
      </div>
      <div class="copyright">
        &copy; 2023 Silas Knight. All rights reserved.
      </div>
    </footer>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import MagicFrame from '@/views/MagicFrame.vue';
import AccordionGallery from './AccordionGallery.vue';

interface Image {
  id: number;
  src: string | undefined;
  alt: string;
}

interface ImageImports {
  [path: string]: Promise<{ default?: string }> | undefined;
}

export default defineComponent({
  name: 'HomePage',
  components: {
    MagicFrame,
    AccordionGallery,
  },
  setup() {
    const nightMode = ref(false);
    const backgroundColor = ref('#f0f0f0');
    const imagePaths = [
      '../../assets/splash/splash00.png',
      '../../assets/splash/splash01.png',
      '../../assets/splash/splash02.png',
      '../../assets/splash/splash03.png',
      '../../assets/splash/splash04.png',
      '../../assets/splash/splash05.png',
      '../../assets/splash/splash06.png',
      '../../assets/splash/splash07.png',
      '../../assets/splash/splash08.png',
      '../../assets/splash/splash09.png',
      // Other images...
    ];

    const splashImages = ref<Image[]>([]);

    const imageImports: ImageImports = imagePaths.reduce(
      (acc: ImageImports, path: string) => {
        acc[path] = import(/* @vite-ignore */ path).catch((error) => {
          console.error(`Failed to load ${path}:`, error);
        });
        return acc;
      },
      {} as ImageImports
    );

    imagePaths
      .map(async (path, index) => {
        const imageModule = await imageImports[path];
        return {
          id: index + 1,
          src: imageModule?.default,
          alt:
            index < 2 ? `Splash Image 0${index}` : `Secret Image 0${index - 2}`,
        };
      })
      .then((splashImagesPromises) => {
        Promise.all(splashImagesPromises).then((resolvedSplashImages) => {
          splashImages.value = resolvedSplashImages;
        });
      });

    const toggleNightMode = () => {
      nightMode.value = !nightMode.value;
      backgroundColor.value = nightMode.value ? '#333' : '#f0f0f0';
    };

    const generateScreenCards = (
      images: Image[]
    ): {
      id: number;
      width: number;
      height: number;
      imageSrc: string | undefined;
      imageAlt: string;
    }[] => {
      return images.slice(0, 2).map((image, index) => ({
        id: index,
        width: 300, // Set default width
        height: 200, // Set default height
        imageSrc: image.src,
        imageAlt: image.alt,
      }));
    };

    return {
      nightMode,
      backgroundColor,
      splashImages,
      toggleNightMode,
      generateScreenCards,
    };
  },
});
</script>

<style scoped lang="scss">
/* Typography */
.project-title {
  font-size: 2rem;
  font-weight: 700;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
}

.welcome-title {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}

.welcome-title:hover {
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
}

.welcome-subtitle {
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 2rem;
}

/* Grid-based layout for the main section */
.content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 1rem;
}

/* Footer styling */
.footer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  gap: 1rem;
}

.footer-links {
  display: flex;
  gap: 1rem;
}

.footer-links a {
  color: inherit;
  text-decoration: none;
  transition: 0.3s;
}

.footer-links a:hover {
  text-decoration: underline;
}

.toggle-container {
  display: flex;
}

.toggle-button {
  background-color: #007bff;
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.toggle-button:hover {
  background-color: #0056b3;
}

.copyright {
  font-size: 0.8rem;
}

/* Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

#app {
  animation: fadeIn 1s;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.header,
.footer {
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.night-mode {
  background-color: #333;
  color: #f0f0f0;
}

.toggle-button {
  background-color: #007bff;
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
}

.toggle-button:hover {
  background-color: #0056b3;
}

/* Responsive design */
@media screen and (max-width: 768px) {
  .content {
    grid-template-columns: 1fr;
  }
}

/* Accessibility improvements */
:root {
  --accessible-text-color: #4a4a4a;
}

body {
  color: var(--accessible-text-color);
}
</style>
