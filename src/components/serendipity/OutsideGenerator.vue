<template>
  <div class="container">
    <div class="foreground" data-scroll>
      <div class="frame"></div>
    </div>
    <div class="background" ref="parallax">
      <splash-image :folder-name="folderName" @imageUrl="setBackgroundImage" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, onUnmounted, Ref } from 'vue';
import SplashImage from '@/components/gamescreens/SplashImage.vue';

const folderName = 'background';
const backgroundImage = ref('');
const parallax: Ref<HTMLDivElement | null> = ref(null);

function setBackgroundImage(imageUrl: string) {
  backgroundImage.value = imageUrl;
}

function scrollHandler() {
  const scrollY = window.scrollY;
  if (parallax.value) {
    parallax.value.style.transform = `translateY(${-scrollY * 0.5}px)`;
  }
}

onMounted(() => {
  window.addEventListener('scroll', scrollHandler);
});

onUnmounted(() => {
  window.removeEventListener('scroll', scrollHandler);
});
</script>
<style scoped>
.container {
  position: relative;
  height: 200vh;
}

.foreground {
  position: relative;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.frame {
  width: 80vw;
  height: 80vh;
  background-color: rgba(242, 241, 239, 0.9);
  border: 15px solid rgba(221, 221, 221, 0.8);
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.1);
}

.background {
  width: 100vw;
  height: 200vh;
  min-height: 100%;
  min-width: 1024px;

  /* Scale proportionately */
  height: auto;
  /* Positioning */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;

  /* Apply perspective for parallax effect */
  transform-origin: top;
  perspective: 1px;
}
</style>
