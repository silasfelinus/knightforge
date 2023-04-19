<template>
  <q-footer elevated>
    <q-toolbar>
      <q-btn
        flat
        round
        dense
        icon="arrow_back_ios"
        @click="toggleLeftDrawer"
        class="toggle-btn left-toggle-btn"
      />
      <q-toolbar-title>
        &copy; {{ new Date().getFullYear() }} AI Wonderforge
      </q-toolbar-title>
      <div class="splash-message-container">
        <SplashMessage />
      </div>
      <q-btn
        flat
        round
        dense
        icon="arrow_forward_ios"
        @click="toggleRightDrawer"
        class="toggle-btn right-toggle-btn"
      />
    </q-toolbar>
  </q-footer>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import SplashMessage from '@/components/layout/SplashMessage.vue';

type ToggleDrawerFunction = (evt: Event) => void;

export default defineComponent({
  components: {
    SplashMessage,
  },
  props: {
    toggleLeftDrawer: {
      type: Function as PropType<ToggleDrawerFunction>,
      required: true,
    },
    toggleRightDrawer: {
      type: Function as PropType<ToggleDrawerFunction>,
      required: true,
    },
  },
});
</script>

<style lang="scss">
.toggle-btn {
  color: $accent; // blueviolet
}
.splash-message-container {
  flex: 1;
  display: flex;
  justify-content: center;
}
</style>
