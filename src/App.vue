<template>
  <div id="app">
    <q-layout view="lHh Lpr lFf">
      <q-header>
        <HeaderWidget />
      </q-header>

      <q-drawer side="right" v-model="collapsedRight1" bordered>
        <SidebarWidget side="right" preset="preset1" />
      </q-drawer>

      <q-drawer side="right" v-model="collapsedRight2" bordered>
        <SidebarWidget side="right" preset="preset2" />
      </q-drawer>

      <q-drawer side="left" v-model="collapsedLeft1" bordered>
        <SidebarWidget side="left" preset="preset3" />
      </q-drawer>

      <q-drawer side="left" v-model="collapsedLeft2" bordered>
        <SidebarWidget side="left" preset="preset4" />
      </q-drawer>

      <q-page-container>
        <MainWidget />
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
    const collapsedRight1 = ref(false);
    const collapsedRight2 = ref(false);
    const collapsedLeft1 = ref(false);
    const collapsedLeft2 = ref(false);

    return { collapsedRight1, collapsedRight2, collapsedLeft1, collapsedLeft2 };
  },
});
</script>
