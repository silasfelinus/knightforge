<template>
  <q-header elevated class="header">
    <div class="header-top">
      <div class="header-images-left">
        <SplashImage class="header-image" />
        <SplashImage class="header-image" />
        <SplashImage class="header-image" />
      </div>
      <div class="splash-message-container">
        <div class="splash-message-content">
          <TitleBar />
          <SplashMessage />
        </div>
      </div>
      <div class="header-images-right">
        <SplashImage class="header-image" />
        <SplashImage class="header-image" />
        <SplashImage class="header-image" />
      </div>
    </div>
  </q-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TitleBar from '@/components/layout/TitleBar.vue';
import SplashMessage from '@/components/layout/SplashMessage.vue';
import SplashImage from '@/components/WIP/SplashViewer.vue.js';

export default defineComponent({
  components: {
    TitleBar,
    SplashMessage,
    SplashImage,
  },
});
</script>

<style lang="scss">
.header {
  height: 5vh;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  position: relative;
  background-color: $primary;
  align-items: center;
}

.header-images-left,
.header-images-right {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: calc(50vw - 20px - 50%);
}
.splash-message-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
}

.splash-message-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.header-image {
  width: auto;
  height: 100%;
  object-fit: contain;
}
</style>
