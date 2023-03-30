<template>
  <div id="app">
    <q-layout :view="$q.screen.gt.sm ? 'lHh Lpr lFf' : 'hHh'">
      <q-header>
        <HeaderWidget @toggleSidebar="toggleSidebar" />
      </q-header>

      <q-page-container>
        <q-layout>
          <q-drawer side="left" v-model="collapsedLeft" bordered>
            <SidebarWidget side="left" :preset="leftPreset" />
          </q-drawer>

          <q-page>
            <MainWidget />
          </q-page>

          <q-drawer side="right" v-model="collapsedRight" bordered>
            <SidebarWidget side="right" :preset="rightPreset" />
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
import SidebarWidget from './components/unused/SidebarWidget.vue';
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
    const leftPreset = ref('preset1');
    const rightPreset = ref('preset1');

    function toggleSidebar(side: string) {
      if (side === 'right') {
        collapsedRight.value = !collapsedRight.value;
      } else if (side === 'left') {
        collapsedLeft.value = !collapsedLeft.value;
      } else if (side === 'leftPreset') {
        const nextPreset = (parseInt(leftPreset.value.slice(-1)) % 4) + 1;
        leftPreset.value = `preset${nextPreset}`;
      } else if (side === 'rightPreset') {
        const nextPreset = (parseInt(rightPreset.value.slice(-1)) % 4) + 1;
        rightPreset.value = `preset${nextPreset}`;
      }
    }

    return {
      collapsedRight,
      collapsedLeft,
      leftPreset,
      rightPreset,
      toggleSidebar,
    };
  },
});
</script>
