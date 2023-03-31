<!-- src/App.vue -->
<template>
  <div id="app">
    <q-layout :view="$q.screen.gt.sm ? 'lHh Lpr lFf' : 'hHh'">
      <q-header>
        <HeaderWidget />
      </q-header>

      <q-page-container>
        <q-layout>
          <q-drawer side="left" v-model="collapsedLeft" bordered>
            <SidebarWidget :side="'left'" :preset="leftPreset" />
          </q-drawer>

          <q-page class="q-gutter-md">
            <MainWidget :preset="mainPreset" />
          </q-page>

          <q-drawer side="right" v-model="collapsedRight" bordered>
            <SidebarWidget :side="'right'" :preset="rightPreset" />
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
import { defineComponent, computed, ref } from 'vue';
import { useStore } from 'vuex';
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
    const store = useStore();
    const collapsedRight = ref(true);
    const collapsedLeft = ref(true);

    const leftPreset = computed(() => store.getters.leftPreset);
    const mainPreset = computed(() => store.getters.mainPreset);
    const rightPreset = computed(() => store.getters.rightPreset);

    return {
      collapsedRight,
      collapsedLeft,
      leftPreset,
      mainPreset,
      rightPreset,
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
