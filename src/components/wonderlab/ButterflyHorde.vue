<template>
  <div class="butterfly-horde">
    <ButterflyNew
      v-for="index in butterflyCount"
      :key="index"
      :wingColor="getRandomColor()"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ButterflyNew from './ButterflySingle.vue';

export default defineComponent({
  name: 'ButterflyHorde',
  components: {
    ButterflyNew,
  },
  props: {
    count: {
      type: Number,
      default: 50,
    },
  },
  setup(props) {
    const butterflyCount = ref(props.count);

    function getRandomNumber() {
      return Math.floor(Math.random() * 256);
    }

    function getRandomColor() {
      return `rgba(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()}, 0.7)`;
    }

    return {
      butterflyCount,
      getRandomColor,
    };
  },
});
</script>
