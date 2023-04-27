<template>
  <div id="wonder-lab" class="brick-wall">
    <TitleBar />
    <NavMenu />
    <SplashImage :folderName="'background'" ref="splashImage" />
    <RedButton @buttonClicked="updateSplashImage" />
    <ButterflySolo />
    <ButterflyFeeder />
    <SplashMessage />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import SplashImage from './SplashImage.vue';
import RedButton from './RedButton.vue';
import ButterflySolo from './ButterflySolo.vue';
import ButterflyFeeder from './ButterflyFeeder.vue';
import NavMenu from './NavMenu.vue';
import TitleBar from './TitleBar.vue';
import SplashMessage from './SplashMessage.vue';
import { useRandomImage } from '../composables/useRandomImage';

export default {
  components: {
    SplashImage,
    RedButton,
    ButterflySolo,
    ButterflyFeeder,
    NavMenu,
    TitleBar,
    SplashMessage,
  },
  setup() {
    const splashImage = ref(null);
    const { randomImageUrl, loadImages, getRandomImageUrl } =
      useRandomImage('background');

    onMounted(() => {
      loadImages();
    });

    function updateSplashImage() {
      getRandomImageUrl();
      splashImage.value.updateImage(randomImageUrl.value);
    }

    return {
      updateSplashImage,
    };
  },
};
</script>

<style scoped>
.brick-wall {
  background-image: url('path/to/your/brick-wall-pattern.png');
  background-color: #f5f5f5;
  background-repeat: repeat;
}
/* Add your stylish layout CSS for the components here */
</style>
