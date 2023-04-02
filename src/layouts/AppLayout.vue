<template>
  <q-layout view="lHh Lpr lFf">
    <q-header v-if="componentVisibility.headerBar">
      <TitleBar />
    </q-header>

    <q-drawer v-model="componentVisibility.leftSidebar" show-if-above>
      <UnderConstruction />
    </q-drawer>

    <q-drawer
      v-model="componentVisibility.rightSidebar"
      show-if-above
      side="right"
    >
      <div class="right-sidebar">
        <!-- Right sidebar content goes here -->
      </div>
    </q-drawer>

    <q-page-container>
      <MainWindow v-if="componentVisibility.mainWindow" />
    </q-page-container>

    <q-footer v-if="componentVisibility.footerBar">
      <RemoteControl />
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TitleBar from '../pages/TitleBar.vue';
import MainWindow from '../pages/MainWindow.vue';
import RemoteControl from '../pages/RemoteControl.vue';
import UnderConstruction from '../pages/UnderConstruction.vue';
import { useAppStore } from '../stores/useAppStore';

export default defineComponent({
  name: 'AppLayout',
  components: {
    TitleBar,
    MainWindow,
    RemoteControl,
    UnderConstruction,
  },
  setup() {
    const appStore = useAppStore();
    const componentVisibility = appStore.componentVisibility;

    return {
      componentVisibility,
    };
  },
});
</script>

<style scoped lang="scss">
.right-sidebar {
  background-color: $warning;
  /* Add other styling for the right sidebar here */
}
</style>
