<template>
  <q-layout view="hHh lpR fFf">
    <q-header>
      <header-widget @toggle-side-menu="toggleSideMenu"></header-widget>
    </q-header>
    <q-drawer
      v-model="sideMenuOpen"
      :show-if-above="true"
      :width="250"
      :breakpoint="500"
    >
      <side-widget></side-widget>
    </q-drawer>
    <q-page-container>
      <!-- Other components will go here -->
      <footer-widget></footer-widget>
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
