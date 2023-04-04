<template>
  <div :class="{ 'night-mode': nightMode }">
    <h1 class="text-h3 q-mb-lg">Welcome to WonderForge</h1>
    <p class="text-h5 q-mb-xl">
      A really pleasing GUI sandbox for designing and prototyping coding
      projects
    </p>
    <div class="row q-gutter-md images-container">
      <q-img
        v-for="image in splashImages"
        :key="image.id"
        :src="image.src"
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

export default defineComponent({
  name: 'HomePage',
  components: {
    QImg,
    QBtn,
  },
  setup() {
    const nightMode = ref(false);

    const imagePaths = [
      '../../assets/splash/splash00.png',
      '../../assets/splash/splash01.png',
      '../../assets/splash/secret00.png',
      '../../assets/splash/secret01.png',
    ];

    const loadImages = async () => {
      const imageImports: any[] = await Promise.all(
        imagePaths.map((path) =>
          import(path).catch((error) => {
            console.error(`Failed to load ${path}:`, error);
          })
        )
      );

      return imageImports.map((img, index) => ({
        id: index + 1,
        src: img.default,
        alt:
          index < 2 ? `Splash Image 0${index}` : `Secret Image 0${index - 2}`,
      }));
    };

    const splashImages = ref<any[]>([]);

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
