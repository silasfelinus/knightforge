<template>
  <q-expansion-item
    v-for="(item, index) in items"
    :key="index"
    :label="item.title"
    expand-icon="arrow_drop_down"
    default-opened
    class="accordion-item"
  >
    <img :src="item.imageUrl" alt="" />
  </q-expansion-item>
</template>

<script lang="ts">
// AccordionGallery.vue - Displays images in an accordion view with collapsible items.
// - Props: items (Array, required) - Objects with "title" and "imageUrl" properties.
// - Components: QExpansionItem (Quasar) - Accordion functionality and styling.
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AccordionGallery',
  props: {
    items: {
      type: Array as () => { title: string; imageUrl: string }[],
      required: true,
    },
  },
});
</script>

<style lang="scss">
.accordion-item {
  border: none;
  border-radius: 0;
  box-shadow: none;
  margin-bottom: 16px;

  .q-expansion-item__header {
    background-color: $primary;
    color: $dark-page;
    padding: 12px 16px;
    font-weight: bold;
    font-size: 18px;
    line-height: 1.2;
    border-radius: 4px;

    .q-item__section {
      flex-grow: 1;
    }

    .q-item__label {
      justify-content: space-between;
    }

    .q-item__icon {
      color: $dark-page;
      font-size: 24px;
    }

    .q-expansion-item__toggle {
      color: $dark-page;
      font-size: 24px;
      padding: 4px;
    }

    &:hover {
      background-color: $primary-dark;
    }
  }

  .q-expansion-item__container {
    background-color: $dark-page;
    padding: 16px;

    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>
