<template>
  <q-layout>
    <q-header>
      <q-toolbar>
        <div class="q-pa-sm q-gutter-sm">
          <SplashImage />
          <NavBar />
          <IconNav />
        </div>
      </q-toolbar>
      <q-toolbar>
        <TextMessage />
        <AccordionNav />
      </q-toolbar>
    </q-header>
    <q-page-container> </q-page-container>
    <q-footer>
      <ButterflySolo />
    </q-footer>
  </q-layout>
</template>

<script lang="ts" setup>
import SplashImage from './SplashImage.vue';
import AccordionNav from './AccordionNav.vue';
import NavBar from './NavBar.vue';
import IconNav from './IconNav.vue';
import TextMessage from './TextMessage.vue';
import ButterflySolo from './ButterflySolo.vue';

defineExpose({
  components: {
    SplashImage,
    AccordionNav,
    NavBar,
    IconNav,
    TextMessage,
    ButterflySolo,
  },
});
</script>

<style scoped>
/* Add your custom styles here */
</style>
