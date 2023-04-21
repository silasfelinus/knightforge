<template>
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
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ComponentFrame from './ComponentFrame.vue';
import ComponentGallery from './ComponentGallery.vue';
import NavigationMenu from '../gamescreens/NavigationMenu.vue';
import LayerMenu from '../gamescreens/LayerMenu.vue';
import AccordionGallery from '../gamescreens/AccordionGallery.vue';
import ChatInterface from './ChatInterface.vue';

export default defineComponent({
  components: {
    ComponentFrame,
    ComponentGallery,
    NavigationMenu,
    LayerMenu,
    AccordionGallery,
    ChatInterface,
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
