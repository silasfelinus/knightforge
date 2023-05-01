<template>
  <q-layout>
    <q-header>
      <q-toolbar>
        <div class="q-pa-sm q-gutter-sm">
          <SplashImage />
          <NavBar />
        </div>
      </q-toolbar>
      <q-toolbar>
        <TextMessage />
        <AccordionNav />
        <AnimationTester />
        <WildcardViewer />
      </q-toolbar>
    </q-header>
    <q-page-container> </q-page-container>
    <q-footer> </q-footer>
  </q-layout>
</template>

<script lang="ts" setup>
import SplashImage from './SplashBackground.vue';
import AccordionNav from './AccordionNav.vue';
import NavBar from './NavBar.vue';
import WildcardViewer from './WildcardViewer.vue';
import TextMessage from './TextMessage.vue';
import AnimationTester from './AnimationTester.vue';

defineExpose({
  components: {
    SplashImage,
    AccordionNav,
    NavBar,
    WildcardViewer,
    TextMessage,
    AnimationTester,
  },
});
</script>

<style scoped>
/* Add your custom styles here */
</style>
