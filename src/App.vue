<!-- App.vue -->
<template>
  <div id="app">
    <HeaderWidget @add="addCard" />
    <main>
      <p class="warning-message">This is a warning message.</p>
      <div class="cards-container">
        <Draggable v-model="screenCards" :component-data="componentData" @change="onCardsChange">
          <template #item="{ element }">
            <Resizable :model-value="element" @update:model-value="onCardResize($event, element.id)">
              <div class="card" :style="{ width: element.width + 'px', height: element.height + 'px' }">
                {{ element.content }}
              </div>
            </Resizable>
          </template>
        </Draggable>
      </div>
    </main>
    <FooterWidget />
  </div>
</template>

<script>
import { ref } from 'vue';
import HeaderWidget from '@/layouts/HeaderWidget.vue';
import FooterWidget from '@/layouts/FooterWidget.vue';
import { useAppStore } from '@/stores/app';
import Draggable from 'vuedraggable';
import { Resizable } from 'vue-resizable';

export default {
  name: 'App',
  components: {
    HeaderWidget,
    FooterWidget,
    Draggable,
    Resizable,
  },
  setup() {
    const appStore = useAppStore();
    const screenCards = ref(appStore.screenCards);

    function addCard(content) {
      appStore.addScreenCard({
        content,
        x: 0,
        y: 0,
        width: 200,
        height: 200,
      });
    }

    function onCardsChange(evt) {
      const card = screenCards.value[evt.newIndex];
      card.x = evt.changed[0].x;
      card.y = evt.changed[0].y;
      appStore.updateScreenCard(card);
    }

    function onCardResize(newSize, id) {
      const card = appStore.getScreenCardById(id);
      if (card) {
        card.width = newSize.width;
        card.height = newSize.height;
        appStore.updateScreenCard(card);
      }
    }

    const componentData = {
      props: {
        tag: 'div',
      },
      class: 'cards-container',
    };

    return {
      screenCards,
      componentData,
      addCard,
      onCardsChange,
      onCardResize,
    };
  },
};
</script>

<style scoped lang="scss">
.cards-container {
  // Your cards container styles go here
}

.card {
  // Your card styles go here
}
</style>
