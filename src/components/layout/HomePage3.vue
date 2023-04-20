<template>
  <div>
    <TopHeader v-if="topHeader.isActive" />
    <LSidebar v-if="lSidebar.isActive" />
    <RSideBar v-if="rSidebar.isActive" />
    <ContainerFrame v-if="containerFrame.isActive">
      <MainScreen>
        <ImageFrame v-if="imageFrame.isActive" />
        <ImageComponent v-if="imageComponent.isActive" />
        <NavigationMenu v-if="navigationMenu.isActive" />
        <LayerMenu v-if="layerMenu.isActive" />
        <AccordionGallery v-if="accordionGallery.isActive" />
        <ChatInterface v-if="chatInterface.isActive" />
        <FeaturedComponent
          v-for="item in activeFeaturedComponents"
          :key="item.id"
          :id="item.id"
        />
      </MainScreen>
      <GameScreen v-if="gameScreen.isActive" />
    </ContainerFrame>
    <BottomFooter v-if="bottomFooter.isActive" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TopHeader from './TopHeader.vue';
import LSidebar from './LSidebar.vue';
import RSideBar from './RSideBar.vue';
import ContainerFrame from './ContainerFrame.vue';
import BottomFooter from './BottomFooter.vue';
import MainScreen from './MainScreen.vue';
import GameScreen from './GameScreen.vue';
import ImageFrame from './ImageFrame.vue';
import ImageComponent from './ImageComponent.vue';
import NavigationMenu from './NavigationMenu.vue';
import LayerMenu from './LayerMenu.vue';
import AccordionGallery from './AccordionGallery.vue';
import ChatInterface from './ChatInterface.vue';
import FeaturedComponent from './FeaturedComponent.vue';

export default defineComponent({
  components: {
    TopHeader,
    LSidebar,
    RSideBar,
    ContainerFrame,
    BottomFooter,
    MainScreen,
    GameScreen,
    ImageFrame,
    ImageComponent,
    NavigationMenu,
    LayerMenu,
    AccordionGallery,
    ChatInterface,
    FeaturedComponent,
  },
  data() {
    return {
      topHeader: { isActive: true, priority: 1 },
      lSidebar: { isActive: true, priority: 2 },
      rSidebar: { isActive: true, priority: 3 },
      containerFrame: { isActive: true, priority: 4 },
      bottomFooter: { isActive: true, priority: 5 },
      imageFrame: { isActive: true, priority: 6 },
      imageComponent: { isActive: true, priority: 7 },
      navigationMenu: { isActive: true, priority: 8 },
      layerMenu: { isActive: true, priority: 9 },
      accordionGallery: { isActive: true, priority: 10 },
      chatInterface: { isActive: true, priority: 11 },
      featuredComponents: [
        { id: 1, isActive: true, priority: 12 },
        { id: 2, isActive: true, priority: 13 },
        { id: 3, isActive: true, priority: 14 },
        { id: 4, isActive: true, priority: 15 },
        { id: 5, isActive: true, priority: 16 },
        { id: 6, isActive: true, priority: 17 },
      ],
      gameScreen: { isActive: true, priority: 18 },
    };
  },
  computed: {
    activeFeaturedComponents() {
      return this.featuredComponents.filter(
        (item: { isActive: boolean }) => item.isActive
      );
    },
  },
});
</script>
