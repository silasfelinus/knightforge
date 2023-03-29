<template>
  <q-layout view="hHh lpR fFf">
    php Copy code
    <HeaderWidget @toggleSidebar="toggleSidebar" />

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" elevated>
      <NavigationWidget />
    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" elevated>
      <ToolshedWidget>
        <QuasarButton label="Click Me!" @click="onButtonClick()" />
      </ToolshedWidget>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <FooterWidget />
  </q-layout>
</template>

<script>
import { ref } from 'vue';
import HeaderWidget from './components/HeaderWidget.vue';
import FooterWidget from './components/FooterWidget.vue';
import NavigationWidget from './components/NavigationWidget.vue';
import ToolshedWidget from './components/ToolshedWidget.vue';
import QuasarButton from './components/QuasarButton.vue';

export default {
  components: {
    HeaderWidget,
    FooterWidget,
    NavigationWidget,
    ToolshedWidget,
    QuasarButton,
  },
  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);

    function toggleSidebar() {
      leftDrawerOpen.value = !leftDrawerOpen.value;
      rightDrawerOpen.value = !rightDrawerOpen.value;
    }

    function onButtonClick() {
      console.log('QuasarButton clicked');
    }

    return {
      leftDrawerOpen,
      rightDrawerOpen,
      toggleSidebar,
      onButtonClick,
    };
  },
};
</script>

<style lang="scss">
.q-layout {
  height: 100vh;
  background-color: $primary;
}

.full-width {
  width: 100%;
}

.toolshed-section,
.chat-window-section {
  flex: 1;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  margin: 5% 1.5%;
  position: relative;
  overflow: hidden;
}
</style>
