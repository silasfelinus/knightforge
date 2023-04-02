<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <TitleBar />
    </q-header>

    <q-drawer v-model="leftSidebarVisibility" show-if-above>
      <UnderConstruction />
    </q-drawer>

    <q-drawer v-model="rightSidebarVisibility" show-if-above side="right">
      <div class="right-sidebar">
        <!-- Right sidebar content goes here -->
      </div>
    </q-drawer>

    <q-page-container>
      <MainWindow />
    </q-page-container>

    <q-footer>
      <RemoteControl />
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import TitleBar from '@/pages/TitleBar.vue';
import MainWindow from '@/pages/MainWindow.vue';
import RemoteControl from '@/pages/RemoteControl.vue';
import UnderConstruction from '@/pages/UnderConstruction.vue';

export default defineComponent({
  name: 'AppLayout',
  components: {
    TitleBar,
    MainWindow,
    RemoteControl,
    UnderConstruction,
  },
  setup() {
    const leftSidebarVisibility = ref(true);
    const rightSidebarVisibility = ref(true);

    return {
      leftSidebarVisibility,
      rightSidebarVisibility,
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
