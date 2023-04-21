<template>
  <div class="main-screen">
    <component-frame
      v-if="imageFrame.isActive"
      class="image-frame"
      component="image-frame"
    />
    <component-frame
      v-if="imageComponent.isActive"
      class="image-component"
      component="image-component"
    />
    <component-frame
      v-if="navigationMenu.isActive"
      class="navigation-menu"
      component="navigation-menu"
    />
    <component-frame
      v-if="layerMenu.isActive"
      class="layer-menu"
      component="layer-menu"
    />
    <component-frame
      v-if="accordionGallery.isActive"
      class="accordion-gallery"
      component="accordion-gallery"
    />
    <component-frame
      v-if="chatInterface.isActive"
      class="chat-interface"
      component="chat-interface"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ComponentFrame from './ComponentFrame.vue';

export default defineComponent({
  components: {
    ComponentFrame,
  },
  data() {
    return {
      imageFrame: { isActive: true },
      imageComponent: { isActive: true },
      navigationMenu: { isActive: true },
      layerMenu: { isActive: true },
      accordionGallery: { isActive: true },
      chatInterface: { isActive: true },
    };
  },
});
</script>

<style scoped>
.main-screen {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  width: 100%;
}

.component-frame {
  width: 100%;
  height: 100%;
}

/* Responsive rules */
@media (max-width: 1024px) {
  .main-screen {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
}

@media (max-width: 768px) {
  .main-screen {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
}
</style>
