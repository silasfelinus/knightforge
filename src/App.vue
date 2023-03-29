<template>
  <div id="app">
    <q-layout view="lHh Lpr lFf">
      <q-header>
        <HeaderWidget />
      </q-header>

      <q-layout>
        <q-drawer side="left" v-model="collapsedLeft1" bordered>
          <SidebarWidget side="left" preset="preset3" />
        </q-drawer>

        <q-drawer side="left" v-model="collapsedLeft2" bordered>
          <SidebarWidget side="left" preset="preset4" />
        </q-drawer>

        <q-page-container>
          <MainWidget />
        </q-page-container>

        <q-drawer side="right" v-model="collapsedRight1" bordered>
          <SidebarWidget side="right" preset="preset1" />
        </q-drawer>

        <q-drawer side="right" v-model="collapsedRight2" bordered>
          <SidebarWidget side="right" preset="preset2" />
        </q-drawer>
      </q-layout>

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
    const collapsedRight1 = ref(true);
    const collapsedRight2 = ref(true);
    const collapsedLeft1 = ref(true);
    const collapsedLeft2 = ref(true);

    function toggleSidebar(side: string) {
      if (side === 'right1') {
        collapsedRight1.value = !collapsedRight1.value;
      } else if (side === 'right2') {
        collapsedRight2.value = !collapsedRight2.value;
      } else if (side === 'left1') {
        collapsedLeft1.value = !collapsedLeft1.value;
      } else if (side === 'left2') {
        collapsedLeft2.value = !collapsedLeft2.value;
      }
      emit('toggleSidebar', side);
    }

    return {
      collapsedRight1,
      collapsedRight2,
      collapsedLeft1,
      collapsedLeft2,
      toggleSidebar,
    };
  },
});
</script>
