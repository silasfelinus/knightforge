<template>
  <q-layout view="hHh lpR fFf">
    <HeaderWidget @toggleSidebar="toggleSidebar" />

    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      bordered
      overlay
      breakpoint="0"
    >
      <NavigationWidget />
    </q-drawer>

    <q-drawer
      show-if-above
      v-model="toolshedDrawerOpen"
      side="left"
      bordered
      overlay
      breakpoint="9999"
    >
      <ToolshedWidget>
        <QuasarButton label="Click Me!" @click="onButtonClick()" />
      </ToolshedWidget>
    </q-drawer>
    <q-page-container>
      <q-page class="flex flex-center">
        <q-row class="full-width">
          <q-col cols="12" md="9">
            <q-row>
              <q-col cols="12">
                <LabspaceWidget />
              </q-col>
            </q-row>
          </q-col>
          <q-col cols="12" md="3" class="chat-window-section">
            <ChatWidget />
          </q-col>
        </q-row>
      </q-page>
    </q-page-container>

    <FooterWidget />
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import HeaderWidget from './components/HeaderWidget.vue';
import FooterWidget from './components/FooterWidget.vue';
import ChatWidget from './components/ChatWidget.vue';
import ToolshedWidget from './components/ToolshedWidget.vue';
import LabspaceWidget from './components/LabspaceWidget.vue';
import NavigationWidget from './components/NavigationWidget.vue';
import QuasarButton from './components/QuasarButton.vue';

export default defineComponent({
  name: 'App',
  components: {
    HeaderWidget,
    FooterWidget,
    ChatWidget,
    ToolshedWidget,
    LabspaceWidget,
    NavigationWidget,
    QuasarButton,
  },
  setup() {
    const leftDrawerOpen = ref(true);
    const toolshedDrawerOpen = ref(false);

    function toggleSidebar() {
      leftDrawerOpen.value = !leftDrawerOpen.value;
      toolshedDrawerOpen.value = !toolshedDrawerOpen.value;
    }

    function onButtonClick() {
      console.log('QuasarButton clicked');
    }

    return {
      leftDrawerOpen,
      toolshedDrawerOpen,
      toggleSidebar,
      onButtonClick,
    };
  },
});
</script>

<style lang="scss">
.q-layout {
  height: 100vh;
  background-color: $primary;
}

.full-width {
  width: 100%;
}

.toolshed-section,
.chat-window-section {
  flex: 1;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  margin: 5% 1.5%;
  position: relative;
  overflow: hidden;
}
</style>
