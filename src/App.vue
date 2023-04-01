<template>
  <div id="app">
    <q-layout view="hHh lpR fFf">
      <HeaderWidget />
      <q-page-container>
        <ScreenWidget
          side="left"
          :preset="appStore.leftScreen.preset"
          :visible="appStore.leftScreen.visible"
        />
        <ScreenWidget
          side="main"
          :preset="appStore.mainScreen.preset"
          :visible="appStore.mainScreen.visible"
        />
        <ScreenWidget
          side="right"
          :preset="appStore.rightScreen.preset"
          :visible="appStore.rightScreen.visible"
        />
      </q-page-container>
      <FooterWidget />
    </q-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useAppStore } from './stores';
import HeaderWidget from './components/HeaderWidget.vue';
import ScreenWidget from './components/ScreenWidget.vue';
import FooterWidget from './components/FooterWidget.vue';

export default defineComponent({
  name: 'App',
  components: {
    HeaderWidget,
    ScreenWidget,
    FooterWidget,
  },
  setup() {
    const appStore = useAppStore();

    return {
      appStore,
    };
  },
});
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}

q-header,
q-footer {
  z-index: 1000;
  background: $primary;
}

q-layout,
q-page {
  flex: 1;
}

q-page-container {
  flex: 1;
  display: flex;
  flex-direction: column;
}

q-layout__view {
  flex: 1;
  display: flex;
  flex-direction: row;
}
</style>
