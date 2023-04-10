<template>
  <div>
    <TitleBar />
    <NavigationMenu />
    <AccordionGallery />
    <ChatInterface />
    <RandomText />
    <RandomImage />
    <TextInput />
    <AssetManager />
    <CodeCard />
    <MagicRemote />
    <ButterflyMascot />
    <MagicFrame />
    <GameScreen />
    <ArtGallery />
  </div>
</template>

<script>
import TitleBar from '@/layout/TitleBar.vue';
import NavigationMenu from '@/router/NavigationMenu.vue';
import AccordionGallery from '@/layout/AccordionGallery.vue';
import ChatInterface from '@/layout/ChatInterface.vue';
import RandomText from '@/layout/RandomMessage.vue';
import RandomImage from '@/layout/RandomImage.vue';
import TextInput from '@/layout/TextInput.vue';
import AssetManager from '@/components/manage/AssetManager.vue';
import CodeCard from '@/components/cards/CodeCard.vue';
import MagicRemote from '@/components/screenfx/MagicRemote.vue';
import ButterflyMascot from '@/components/screenfx/ButterflyMascot.vue';
import MagicFrame from '@/components/screenfx/MagicFrame.vue';
import GameScreen from '@/components/game/GameScreen.vue';
import ArtGallery from '@/components/gallery/ArtGallery.vue';

export default {
  components: {
    TitleBar,
    NavigationMenu,
    AccordionGallery,
    ChatInterface,
    RandomText,
    RandomImage,
    TextInput,
    AssetManager,
    CodeCard,
    MagicRemote,
    ButterflyMascot,
    MagicFrame,
    GameScreen,
    ArtGallery,
  },
};
</script>

<style scoped>
/* Add any required styles for the WrapperComponent */
</style>
