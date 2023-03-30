<template>
  <div id="app">
    <q-layout
      :view="$q.screen.gt.sm ? 'lHh Lpr lFf' : 'hHh'"
      class="q-gutter-md"
    >
      <q-page-sticky position="top" class="q-gutter-sm">
        <HeaderWidget
          @toggleSidebar="toggleSidebar"
          @togglePreset="togglePreset"
        />
      </q-page-sticky>

      <q-page-container class="q-gutter-md">
        <q-layout>
          <q-drawer side="left" v-model="collapsedLeft" bordered>
            <SidebarWidget :side="'left'" :preset="leftPreset" />
          </q-drawer>

          <q-page class="q-gutter-md">
            <MainWidget />
          </q-page>

          <q-drawer side="right" v-model="collapsedRight" bordered>
            <SidebarWidget :side="'right'" :preset="rightPreset" />
          </q-drawer>
        </q-layout>
      </q-page-container>

      <q-page-sticky position="bottom" class="q-gutter-sm">
        <FooterWidget />
      </q-page-sticky>
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
    const collapsedRight = ref(false);
    const collapsedLeft = ref(false);
    const leftPreset = ref('preset1');
    const rightPreset = ref('preset3');

    function togglePreset(side: string) {
      if (side === 'left') {
        changePreset(leftPreset);
      } else if (side === 'right') {
        changePreset(rightPreset);
      }
    }

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

    function changePreset(preset: Ref<string>) {
      const nextPresetNumber = (parseInt(preset.value.slice(-1)) % 6) + 1;
      preset.value = `preset${nextPresetNumber}`;
    }

    return {
      collapsedRight,
      collapsedLeft,
      leftPreset,
      rightPreset,
      toggleSidebar,
      togglePreset,
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
