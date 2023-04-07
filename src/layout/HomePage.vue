<template>
  <div id="app-header">
    <navigation-menu></navigation-menu>
    <!-- Your other header components -->
  </div>
  <full-page-wrapper>
    <splash-message></splash-message>
    <AccordionGallery />
    <magic-screen></magic-screen>
  </full-page-wrapper>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AccordionGallery from './AccordionGallery.vue';
import FullPageWrapper from './FullPageWrapper.vue';
import MagicScreen from './MagicScreen.vue';
import NavigationMenu from '../views/NavigationMenu.vue';
import SplashMessage from '../views/SplashMessage.vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    AccordionGallery,
    FullPageWrapper,
    MagicScreen,
    NavigationMenu,
    SplashMessage,
  },
});
</script>

<style lang="scss">
.div {
  background: $primary;
}
</style>
