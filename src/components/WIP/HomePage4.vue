<template>
  <div class="home-page">
    <div class="left-column component-container">
      <div class="main-splash"><SplashFolder :folderName="'splash'" /></div>
      <div class="nav-menu"><AccordionGallery /></div>
    </div>
    <div class="middle-column component-container">
      <div class="gamescreen-container"><GameScreen /></div>
      <div class="layermenu-container"><LayerMenu /></div>
      <div class="titlebar-message-container">
        <TitleBar />
        <SplashMessage />
      </div>
      <div class="butterfly-container">
        <div class="quadrant"><ButterflyMascot /></div>
        <div class="quadrant"><ButterflyMascot /></div>
        <div class="quadrant"><ButterflyMascot /></div>
        <div class="quadrant"><ButterflyMascot /></div>
      </div>
    </div>
    <div class="right-column component-container">
      <div class="top-container"><SplashFolder :folderName="'chest'" /></div>
      <div class="middle-container"><SplashFolder :folderName="'shed'" /></div>
      <div class="bottom-container">
        <SplashFolder :folderName="'splash'" />
      </div>
    </div>
  </div>
</template>

<script>
import SplashFolder from '../gamescreens/SplashFolder.vue';
import TitleBar from '../gamescreens/TitleBar.vue';
import SplashMessage from '../gamescreens/SplashMessage.vue';
import ButterflyMascot from '../gamescreens/ButterflySimple.vue';
import AccordionGallery from '../gamescreens/AccordionGallery.vue';
import GameScreen from '../layout/GameScreen.vue';
import LayerMenu from '../gamescreens/LayerMenu.vue';

export default {
  components: {
    SplashFolder,
    TitleBar,
    SplashMessage,
    ButterflyMascot,
    AccordionGallery,
    GameScreen,
    LayerMenu,
  },
};
</script>

<style>
.home-page {
  display: flex;
  height: 100vh;
  width: 100vw;
}

.component-container {
  overflow: hidden;
}

.left-column {
  flex: 0 0 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.middle-column {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #e0e0e0;
  border-right: 2px solid #000;
}

.right-column {
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
}

.top-container,
.middle-container,
.bottom-container {
  flex: 1;
  margin: 2px;
  overflow-y: auto;
}

.gamescreen-container {
  background-color: #f0c0c0;
}

.layermenu-container {
  background-color: #08c8c0;
}

.titlebar-message-container {
  background-color: #c0f0c0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.splash-message {
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-top: 10px;
}

.butterfly-container {
  background-color: #c0c0f0;
  display: flex;
  flex-wrap: wrap;
}

.quadrant {
  flex-basis: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.splash-message {
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-top: 10px;
}
</style>
