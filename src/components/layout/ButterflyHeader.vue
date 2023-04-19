<template>
  <q-layout>
    <q-header elevated class="header">
      <div class="header-top">
        <ButterflyFrame class="butterflyFrame">
          <SplashImage class="header-image" folder="chest" />
        </ButterflyFrame>
        <ButterflyMascot class="header-mascot-right" />
      </div>
      <div class="splash-message-container">
        <div class="splash-message-content">
          <TitleBar />
          <SplashMessage />
        </div>
        <ButterflyFrame class="butterflyFrame">
          <SplashImage class="header-image" folder="wondershed" />
        </ButterflyFrame>
      </div>
    </q-header>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TitleBar from './TitleBar.vue';
import SplashMessage from './SplashMessage.vue';
import SplashImage from '../gamescreens/SplashImage.vue';
import ButterflyMascot from './ButterflyMascot.vue';
import ButterflyFrame from './ButterflyFrame.vue';

export default defineComponent({
  components: {
    TitleBar,
    SplashMessage,
    SplashImage,
    ButterflyMascot,
    ButterflyFrame,
  },
});
</script>
<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  width: 100vw;
}

.header-top {
  display: flex;
  align-items: center;
  width: 100%;
}

.header-mascot-right {
  margin-left: 1rem;
}

.header-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: flex;
}

.splash-message-container {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.splash-message-content {
  text-align: center;
  max-width: 60%;
}
</style>
