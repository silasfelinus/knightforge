<!-- CardMat.vue -->
<template>
  <q-page class="card-mat">
    <q-scroll-area class="cards-container">
      <div class="cards">
        <CodeCard
          v-for="(card, index) in cards"
          :key="index"
          :avatar="card.avatar"
          :title="card.title"
          :fields="card.fields"
          :description="card.description"
          @portPosition="handlePortPosition(index, $event)"
        />
      </div>
    </q-scroll-area>
    <CardCable v-if="cableVisible" :start="cableStart" :end="cableEnd" />
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CodeCard from './CodeCard.vue';
import CardCable from './CardCable.vue';

export default defineComponent({
  name: 'CardMat',
  components: {
    CodeCard,
    CardCable
  },
  setup() {
    const cards = ref([
      /* Your cards data */
    ]);

    const cableVisible = ref(false);
    const cableStart = ref({ x: 0, y: 0 });
    const cableEnd = ref({ x: 0, y: 0 });

    function handlePortPosition(index, { type, x, y }) {
      if (!cableVisible.value) {
        cableStart.value = { x, y };
        cableVisible.value = true;
      } else {
        cableEnd.value = { x, y };
        // Handle connecting the ports, e.g., updating the card data or making API calls.
        cableVisible.value = false;
      }
    }

    return {
      cards,
      cableVisible,
      cableStart,
      cableEnd,
      handlePortPosition
    };
  }
});
</script>

<style scoped lang="scss">
.card-mat {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.cards-container {
  flex-grow: 1;
  position: relative;
  overflow: auto;
}
.cards {
  display: flex;
  flex-wrap: nowrap;
  padding: 16px;
  align-items: center;
}
</style>
