<template>
  <div class="main-screen">
    <component-frame class="game-screen" :component="GameScreen" />
    <component-frame class="component-gallery" :component="ComponentGallery" />
    <component-frame class="title-bar" :component="TitleBar" />
    <component-frame class="splash-message" :component="SplashMessage" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ComponentFrame from '../layout/ComponentFrame.vue';
import GameScreen from '../layout/GameScreen.vue';
import ComponentGallery from '../layout/ScreenGallery.vue';
import TitleBar from '../gamescreens/TitleBar.vue';
import SplashMessage from '../gamescreens/SplashMessage.vue';

export default defineComponent({
  components: {
    ComponentFrame,
    GameScreen,
    ComponentGallery,
    TitleBar,
    SplashMessage,
  },
  setup() {
    return {
      GameScreen,
      ComponentGallery,
      TitleBar,
      SplashMessage,
    };
  },
});
</script>

<style scoped>
.main-screen {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: 100%;
  height: 100%;
}

.component-frame {
  width: 100%;
  height: 100%;
}

.game-screen {
  grid-column: 1;
  grid-row: 1;
}

.component-gallery {
  grid-column: 2;
  grid-row: 1;
}

.title-bar {
  grid-column: 1;
  grid-row: 2;
}

.splash-message {
  grid-column: 2;
  grid-row: 2;
}
</style>
