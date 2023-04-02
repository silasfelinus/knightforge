<template>
  <div>
    <header v-if="showHeader">
      <slot name="header"></slot>
    </header>

    <aside v-if="showSidebar">
      <slot name="sidebar"></slot>
    </aside>

    <main>
      <slot></slot>
    </main>

    <footer v-if="showFooter">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppLayout',
  props: {
    showHeader: {
      type: Boolean,
      default: true,
    },
    showFooter: {
      type: Boolean,
      default: true,
    },
    showSidebar: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
