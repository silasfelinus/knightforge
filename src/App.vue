<template>
  <div id="app">
    <HeaderWidget />
    <ScreenWidget
      side="left"
      :preset="leftScreen.preset"
      :visible="leftScreen.visible"
    />
    <ScreenWidget
      side="main"
      :preset="mainScreen.preset"
      :visible="mainScreen.visible"
    />
    <ScreenWidget
      side="right"
      :preset="rightScreen.preset"
      :visible="rightScreen.visible"
    />
    <FooterWidget />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
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
    const store = useStore();

    return {
      leftScreen: computed(() => store.state.leftScreen),
      mainScreen: computed(() => store.state.mainScreen),
      rightScreen: computed(() => store.state.rightScreen),
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

q-page-container {
  flex: 1;
  display: flex;
  flex-direction: column;
}

q-layout,
q-page {
  flex: 1;
}
</style>
