<template>
  <div class="accordion-gallery">
    <q-accordion v-for="(item, index) in items" :key="index">
      <q-accordion-item>
        <template v-slot:header>
          <div class="item-header">{{ item.title }}</div>
        </template>
        <img :src="item.imageUrl" :alt="item.title" class="item-image" />
      </q-accordion-item>
    </q-accordion>
  </div>
</template>

<script lang="ts">
// AccordionGallery.vue - Displays images in an accordion view.
// - Props: items (Array, required) - Objects with "title" and "imageUrl" properties.
// - Components: QAccordion, QAccordionItem (Quasar) - Accordion functionality.
import { defineComponent } from 'vue';
import { QAccordion, QAccordionItem } from 'quasar';

export default defineComponent({
  name: 'AccordionGallery',
  components: {
    QAccordion,
    QAccordionItem,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
});
</script>

<style lang="scss">
.gallery-wrap {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 70vh;
}

.item {
  flex: 1;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: flex 0.8s ease;
}

.item:hover {
  flex: 7;
}
</style>
