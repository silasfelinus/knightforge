<template>
  <div id="app">
    <q-layout view="hHh lpR fFf">
      <HeaderWidget />
      <q-page-container>
        <router-view />
      </q-page-container>
      <FooterWidget />
    </q-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderWidget from './layouts/HeaderWidget.vue';
import FooterWidget from './layouts/FooterWidget.vue';

export default defineComponent({
  name: 'App',
  components: {
    HeaderWidget,
    FooterWidget,
  },
});
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}

q-header,
q-footer {
  z-index: 1000;
  background: $primary;
}

q-layout,
q-page {
  flex: 1;
}

q-page-container {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
