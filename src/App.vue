<template>
  <q-layout view="hHh lpR fFf">
    <header-widget @toggle-side-menu="toggleSideMenu"></header-widget>
    <side-widget
      :value="sideMenuOpen"
      @input="(val) => (sideMenuOpen.value = val)"
    ></side-widget>
    <q-page-container>
      <footer-widget></footer-widget>
      <!-- Other components will go here -->
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import HeaderWidget from './components/HeaderWidget.vue';
import SideWidget from './components/SideWidget.vue';
import FooterWidget from './components/FooterWidget.vue';

export default defineComponent({
  name: 'App',
  components: {
    HeaderWidget,
    SideWidget,
    FooterWidget,
  },
  setup() {
    const sideMenuOpen = ref(true);

    const toggleSideMenu = () => {
      sideMenuOpen.value = !sideMenuOpen.value;
    };

    return {
      sideMenuOpen,
      toggleSideMenu,
    };
  },
});
</script>
