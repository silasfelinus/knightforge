<template>
  <q-layout view="hHh lpR fFf">
    <q-drawer show-if-above partial-hide>
      <navigation-menu></navigation-menu>
    </q-drawer>
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          round
          dense
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
        />
        <q-toolbar-title>
          <TitleBar />
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <full-page-wrapper>
      <AccordionGallery />
      <magic-screen></magic-screen>
    </full-page-wrapper>
    <q-footer>
      <splash-message></splash-message>
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AccordionGallery from '../views/AccordionGallery.vue';
import FullPageWrapper from '../views/FullPageWrapper.vue';
import MagicScreen from '../views/MagicScreen.vue';
import NavigationMenu from '../views/NavigationMenu.vue';
import SplashMessage from '../views/SplashMessage.vue';
import TitleBar from '../views/TitleBar.vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    AccordionGallery,
    FullPageWrapper,
    MagicScreen,
    NavigationMenu,
    SplashMessage,
    TitleBar,
  },
  data() {
    return {
      leftDrawerOpen: true,
    };
  },
});
</script>

<style lang="scss">
.div {
  background: $primary;
}
</style>
