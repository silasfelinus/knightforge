<template>
  <div id="app">
    <q-layout :view="$q.screen.gt.sm ? 'lHh Lpr lFf' : 'hHh'">
      <q-header>
        <HeaderWidget @changePreset="changePreset" />
      </q-header>

      <q-page-container>
        <q-layout>
          <q-drawer side="left" v-model="collapsedLeft" bordered>
            <SidebarWidget :side="'left'" :preset="TextInput" />
          </q-drawer>

          <q-page class="q-gutter-md">
            <MainWidget :preset="SplashScreen" />
          </q-page>

          <q-drawer side="right" v-model="collapsedRight" bordered>
            <SidebarWidget :side="'right'" :preset="ChatWidget" />
          </q-drawer>
        </q-layout>
      </q-page-container>

      <q-footer>
        <FooterWidget />
      </q-footer>
    </q-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import HeaderWidget from './components/HeaderWidget.vue';
import SidebarWidget from './components/SidebarWidget.vue';
import MainWidget from './components/MainWidget.vue';
import FooterWidget from './components/FooterWidget.vue';

export default defineComponent({
  name: 'App',
  components: {
    HeaderWidget,
    SidebarWidget,
    MainWidget,
    FooterWidget,
  },
  setup() {
    const collapsedRight = ref(true);
    const collapsedLeft = ref(true);
    const leftPreset = ref('TextInput');
    const mainPreset = ref('SplashScreen');
    const rightPreset = ref('ChatWidget');

    function changePreset({ side, preset }: { side: string; preset: string }) {
      if (side === 'left') {
        leftPreset.value = preset;
      } else if (side === 'main') {
        mainPreset.value = preset;
      } else if (side === 'right') {
        rightPreset.value = preset;
      }
    }

    return {
      collapsedRight,
      collapsedLeft,
      leftPreset,
      mainPreset,
      rightPreset,
      changePreset,
    };
  },
});
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}

q-header,
q-footer {
  z-index: 1000;
  background: var(--q-color-primary);
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
