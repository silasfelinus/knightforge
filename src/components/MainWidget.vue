<template>
  <transition name="slide-down">
    <div class="main-widget" @click="nextImage">
      <q-img
        class="splash-screen"
        :src="currentSplashImage"
        :alt="currentCaption"
        :ratio="16 / 9"
      >
        <div class="caption">{{ currentCaption }}</div>
      </q-img>
    </div>
  </transition>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { QImg } from 'quasar';

export default defineComponent({
  name: 'MainWidget',
  components: {
    QImg,
  },
  setup() {
    const splashFolders = ['splash', 'secret'];
    let currentFolderIndex = 0;

    const splashImages = {
      splash: [
        {
          path: '/images/splash1.png',
          caption: 'An astonishing view of a mysterious landscape.',
        },
        {
          path: '/images/splash2.png',
          caption: 'An unexpected encounter with fascinating creatures.',
        },
        {
          path: '/images/splash3.png',
          caption: 'A mesmerizing glimpse into a hidden paradise.',
        },
        // Add more image paths and captions here
      ],
      secret: [
        // Add secret folder image paths and captions here
      ],
    };

    const currentSplashImage = ref(splashImages.splash[0].path);
    const currentCaption = ref(splashImages.splash[0].caption);
    let currentIndex = 0;

    function preloadImages() {
      for (const folder in splashImages) {
        splashImages[folder].forEach((image) => {
          const img = new Image();
          img.src = image.path;
        });
      }
    }

    function nextImage() {
      currentIndex =
        (currentIndex + 1) %
        splashImages[splashFolders[currentFolderIndex]].length;
      currentSplashImage.value =
        splashImages[splashFolders[currentFolderIndex]][currentIndex].path;
      currentCaption.value =
        splashImages[splashFolders[currentFolderIndex]][currentIndex].caption;
    }

    function changeFolder() {
      currentFolderIndex = (currentFolderIndex + 1) % splashFolders.length;
      currentIndex = 0;
      currentSplashImage.value =
        splashImages[splashFolders[currentFolderIndex]][currentIndex].path;
      currentCaption.value =
        splashImages[splashFolders[currentFolderIndex]][currentIndex].caption;
    }

    function handleKeydown(event) {
      if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        nextImage();
      } else if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        changeFolder();
      }
    }

    onMounted(() => {
      preloadImages();
      document.addEventListener('keydown', handleKeydown);
    });

    return {
      currentSplashImage,
      currentCaption,
    };
  },
});
</script>
<style scoped lang="scss">
.main-widget {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.splash-screen {
  max-width: 100%;
  max-height: 100%;
  position: relative;
}

.caption {
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: white;
  font-size: 1.2em;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.5s ease;
}

.slide-down-enter,
.slide-down-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
