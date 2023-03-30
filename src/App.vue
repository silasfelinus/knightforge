<template>
  <div id="app">
    <q-layout :view="$q.screen.gt.sm ? 'lHh Lpr lFf' : 'hHh'">
      <q-header>
        <HeaderWidget @toggleSidebar="toggleSidebar" />
      </q-header>

      <q-page-container>
        <q-layout class="flex-row" style="height: 100%">
          <q-drawer side="left" v-model="collapsedLeft" bordered>
            <SidebarWidget side="left" :preset="leftPreset" />
          </q-drawer>

          <div class="middle-section">
            <MainWidget />
          </div>

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
    const leftPreset = ref('preset2');
    const rightPreset = ref('preset4');

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
<style scoped lang="scss">
.middle-section {
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
