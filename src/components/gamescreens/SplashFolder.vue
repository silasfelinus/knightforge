<template>
  <div class="image-container">
    <img
      :src="randomImageUrl"
      alt="Random Image"
      :class="animationClass"
      :key="randomImageUrl"
      class="splash-image"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch } from 'vue';

export default defineComponent({
  props: {
    folderName: {
      type: String,
      default: 'splash',
    },
    timerInterval: {
      type: Number,
      default: 15000, // Default interval of 5 seconds
    },
    animationClass: {
      type: String,
      default: 'drop-animation',
    },
  },
  setup(props) {
    const randomImageUrl = ref('');
    let imagesList: string[] = [];
    let timerId: number | null = null;

    const serverAddress = 'http://localhost:3000';

    const getRandomImageUrl = () => {
      if (imagesList.length === 0) {
        console.error('No images found in the folder');
        return;
      }
      const randomIndex = Math.floor(Math.random() * imagesList.length);
      randomImageUrl.value = `${serverAddress}/assets/images/${props.folderName}/${imagesList[randomIndex]}`;
    };

    const randomInterval = () => {
      const min = 5_000; // 5 seconds in milliseconds
      const max = 20_000; // 20 seconds in milliseconds
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const loadImages = async () => {
      try {
        console.log(
          `Fetching images from: ${serverAddress}/images?folderName=${props.folderName}`
        );
        const response = await fetch(
          `${serverAddress}/images?folderName=${props.folderName}`
        );
        if (!response.ok) {
          console.error(await response.text());
          return;
        }
        imagesList = await response.json();
        getRandomImageUrl();
        timerId = window.setInterval(getRandomImageUrl, randomInterval());
      } catch (error) {
        console.error('Error while fetching images:', error);
      }
    };

    onMounted(() => {
      loadImages();
    });

    watch(
      () => props.folderName,
      () => {
        if (timerId !== null) {
          window.clearInterval(timerId);
        }
        loadImages();
      }
    );

    return { randomImageUrl };
  },
});
</script>

<style scoped>
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

.drop-animation {
  animation: drop 1s;
}

.splash-image {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
}

@keyframes drop {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}
</style>
