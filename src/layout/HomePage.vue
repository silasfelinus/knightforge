<template>
  <div id="app-header">
    <!-- Your other header components -->
  </div>
  <full-page-wrapper></full-page-wrapper>
  <AccordionGallery />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AccordionGallery from './AccordionGallery.vue';
import FullPageWrapper from './FullPageWrapper.vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    AccordionGallery,
    FullPageWrapper,
  },
});
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

// Define color variables
$primary-color: $primary;
$secondary-color: $secondary;
$background-color: linear-gradient(135deg, $primary 0%, #9c27b0 100%);

body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  background-image: $background-color;
  background-repeat: no-repeat;
  background-attachment: fixed;
  color: #ffffff;
}

#app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: rgba(63, 81, 181, 0.7);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  a {
    color: #ffffff;
    text-decoration: none;
    font-weight: 700;
    transition: color 0.3s ease;

    &:hover {
      color: $secondary-color;
    }
  }
}

AccordionGallery {
  margin: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
</style>
