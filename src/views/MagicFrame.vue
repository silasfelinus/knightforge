<template>
  <div class="MagicFrame">
    <div
      v-for="(card, index) in cards"
      :key="card.id"
      class="ScreenCard"
      :style="{ width: card.width + 'px', height: card.height + 'px' }"
    >
      <img
        :src="card.imageSrc"
        :alt="card.imageAlt"
        @click="changeImage(index)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface Card {
  id: number;
  width: number;
  height: number;
  imageSrc: string | undefined;
  imageAlt: string;
}

export default defineComponent({
  name: 'MagicFrame',
  props: {
    cards: {
      type: Array as PropType<Card[]>,
      required: true
    }
  },
  setup(props) {
    const { cards } = props;

    const changeImage = (index: number) => {
      const newImageIndex = Math.floor(Math.random() * 10);
      cards[index].imageSrc = cards[newImageIndex].imageSrc;
    };

    return {
      cards,
      changeImage
    };
  }
});
</script>
