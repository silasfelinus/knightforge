<template>
  <div>
    <SplashImage
      v-if="!showButterflies"
      class="treasure-chest"
      folderName="wonderchest"
      @click="releaseButterflies"
      style="width: 100px; height: 100px; object-fit: cover"
    />
    <div
      v-if="showButterflies"
      class="butterfly-horde"
      style="
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 9999;
      "
    >
      <Butterfly
        v-for="index in butterflyCount"
        :key="index"
        :wingColor="getRandomColor()"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Butterfly from './ButterflyNew.vue';
import SplashImage from '../gamescreens/SplashImage.vue';

export default defineComponent({
  name: 'ButterflyHorde',
  components: {
    Butterfly,
    SplashImage,
  },
  props: {
    count: {
      type: Number,
      default: 50,
    },
  },
  setup(props) {
    const butterflyCount = ref(props.count);
    const showButterflies = ref(false);

    function releaseButterflies() {
      showButterflies.value = !showButterflies.value;
    }

    function getRandomNumber() {
      return Math.floor(Math.random() * 256);
    }

    function getRandomColor() {
      return `rgba(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()}, 0.7)`;
    }

    return {
      butterflyCount,
      showButterflies,
      releaseButterflies,
      getRandomColor,
    };
  },
});
</script>
