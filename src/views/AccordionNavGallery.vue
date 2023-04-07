<!-- components/AccordionNavGallery.vue -->
<template>
  <div>
    <NavigationMenu :routes="galleryRoutes" />
    <AccordionGallery @itemHover="updateRoutes" />
  </div>
</template>

<script>
import NavigationMenu from './NavigationMenu.vue';
import AccordionGallery from './AccordionGallery.vue';

export default {
  name: 'AccordionNavGallery',
  components: {
    NavigationMenu,
    AccordionGallery,
  },
  data() {
    return {
      galleryRoutes: [],
    };
  },
  methods: {
    updateRoutes(routes) {
      this.galleryRoutes = routes;
    },
  },
};
</script>
