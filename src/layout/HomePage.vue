<template>
  <div id="app-header">
    <!-- Your other header components -->
  </div>
  <AccordionGallery />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AccordionGallery from '@/layout/AccordionGallery.vue.js';

export default defineComponent({
  name: 'HomePage',
  components: {
    AccordionGallery,
  },
});
</script>
