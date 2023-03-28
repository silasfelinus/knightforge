<template>
  <div class="footer-widget">
    <q-footer class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          &copy; {{ currentYear }} Knightforge Wonderlab. All rights reserved.
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'FooterWidget',
  setup() {
    const currentYear = ref(new Date().getFullYear());
    return {
      currentYear,
    };
  },
});
</script>

<style lang="scss" scoped>
.footer-widget {
  .q-footer {
    height: 48px;
    box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
  }
}
</style>
