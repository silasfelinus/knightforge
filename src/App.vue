<template>
  <div id="app">
    <q-layout :view="$q.screen.gt.sm ? 'lHh Lpr lFf' : 'hHh'" class="q-gutter-md">
      <q-header class="q-gutter-sm">
        <HeaderWidget @toggleSidebar="toggleSidebar" />
      </q-header>

      <q-page-container class="q-gutter-md">
        <q-layout>
          <q-drawer side="left" v-model="collapsedLeft" bordered>
            <SidebarWidget side="left" :preset="'preset1'" />
          </q-drawer>

          <q-page class="q-gutter-md">
            <MainWidget />
          </q-page>

          <q-drawer side="right" v-model="collapsedRight" bordered>
            <SidebarWidget side="right" :preset="'preset3'" />
          </q-drawer>
        </q-layout>
      </q-page-container>

      <q-footer class="q-gutter-sm">
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
  setup(_, { emit }) {
    const collapsedRight = ref(true);
    const collapsedLeft = ref(true);

    function toggleSidebar(side: string) {
      switch (side) {
        case 'right':
          collapsedRight.value = !collapsedRight.value;
          break;
        case 'left':
          collapsedLeft.value = !collapsedLeft.value;
          break;
        default:
          // Handle other cases as needed
          break;
      }
    }

    return {
      collapsedRight,
      collapsedLeft,
      toggleSidebar,
    };
  },
});
</script>
