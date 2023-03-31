<template>
  <div id="app">
    <q-layout :view="$q.screen.gt.sm ? 'lHh Lpr lFf' : 'hHh'">
      <q-header>
        <HeaderWidget />
      </q-header>

      <q-page-container>
        <q-layout>
          <ScreenWidget
            :side="'left'"
            :size="'small'"
            :orientation="'vertical'"
          ></ScreenWidget>
          <ScreenWidget
            :side="'main'"
            :size="'large'"
            :orientation="'square'"
          ></ScreenWidget>
          <ScreenWidget
            :side="'right'"
            :size="'small'"
            :orientation="'vertical'"
          ></ScreenWidget>
        </q-layout>
      </q-page-container>

      <q-footer>
        <FooterWidget />
      </q-footer>
    </q-layout>
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
