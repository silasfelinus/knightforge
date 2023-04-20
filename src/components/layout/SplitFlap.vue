<template>
  <div class="splitflap-container">
    ...
    <div
      class="bottom"
      :ref="(el) => (bottoms[row.index * flapsPerRow + flap.index] = el)"
    ></div>
    <div
      class="nextHalf"
      :ref="(el) => (nextHalfs[row.index * flapsPerRow + flap.index] = el)"
    ></div>
    <div class="nextFull"></div>
  </div>
  <ButterflyHorde
    :number="50"
    :vw="screenWidth"
    :vh="screenHeight"
    @butterfly-over="handleButterflyOver"
  />
</template>
<script>
import { ref, watch, onMounted } from 'vue';
import ButterflyHorde from './ButterflyHorde.vue';

export default {
  components: {
    ButterflyHorde,
  },
  props: {
    phrase: {
      type: String,
      required: false,
      default: 'WONDERFORGE',
    },
  },
  computed: {
    filteredFlaps() {
      return (row) => {
        return row.flaps.filter((flap) => !flap.butterfly);
      };
    },
  },

  setup(props) {
    const rows = ref([]);
    const phrase = ref(props.phrase.toUpperCase());
    const flapSize = 100;
    const flapMargin = 10;
    const bottoms = ref([]);
    const nextHalfs = ref([]);

    const screenWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    const screenHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;

    const flapsPerRow = Math.floor(screenWidth / (flapSize + flapMargin * 2));
    const numberOfRows = Math.floor(screenHeight / (flapSize + flapMargin * 2));

    const generateFlap = (bgColor, butterfly = false) => ({
      bgColor: bgColor,
      butterfly: butterfly,
    });

    const setupFlaps = () => {
      const centerRowIndex = Math.floor(numberOfRows / 2);
      const centerFlapIndex =
        Math.floor(flapsPerRow / 2) - Math.floor(phrase.value.length / 2);

      const tempRows = [];
      for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
        const row = { index: rowIndex, flaps: [] };
        for (let flapIndex = 0; flapIndex < flapsPerRow; flapIndex++) {
          const isCenterRow = rowIndex === centerRowIndex;
          const isPhraseIndex =
            flapIndex >= centerFlapIndex &&
            flapIndex < centerFlapIndex + phrase.value.length;
          const isFrame =
            Math.abs(centerRowIndex - rowIndex) <= 1 ||
            Math.abs(centerFlapIndex - flapIndex) <= 1;

          if (isCenterRow && isPhraseIndex) {
            row.flaps.push(generateFlap('#3BB6EB', true));
          } else if (isFrame) {
            row.flaps.push(generateFlap('#3BB6EB'));
          } else {
            row.flaps.push(generateFlap('#3BB6EB', true));
          }
        }
        tempRows.push(row);
      }

      rows.value = tempRows;
    };

    const animateFlap = (flap, butterfly = null) => {
      if (flap.butterfly || butterfly) {
        const index = butterfly
          ? butterfly - 1
          : rows.value.flatMap((row) => row.flaps).indexOf(flap);

        // Access the bottoms and nextHalfs arrays directly
        const bottom = bottoms.value[index];
        const nextHalf = nextHalfs.value[index];

        bottom.classList.add('flip1');
        nextHalf.classList.add('flip2');

        setTimeout(() => {
          bottom.classList.remove('flip1');
          nextHalf.classList.remove('flip2');
        }, 1000);
      }
    };

    const handleButterflyOver = (butterflyIndex) => {
      animateFlap(null, butterflyIndex);
    };

    watch(
      () => props.phrase,
      () => {
        phrase.value = props.phrase.toUpperCase();
        setupFlaps();
      },
      { immediate: true }
    );

    onMounted(setupFlaps);

    return { rows, animateFlap, handleButterflyOver, flapsPerRow };
  },
};
</script>

<style scoped>
body {
  background-color: #fcf8e1;
}

.splitflap-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.row {
  display: flex;
  justify-content: center;
}

.splitflap {
  position: relative;
  min-width: 100px;
  height: 100px;
  margin: 10px;
  line-height: 100px;
  font-size: 100px;
  font-family: Monospace;
  text-align: center;
  color: white;
  z-index: 1;
}

.top {
  position: relative;
  height: 50%;
  width: 100%;
  background-color: #3bb6eb;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
  z-index: 0;
}

div {
  perspective: 500px;
}

.bottom {
  position: relative;
  height: 100%;
  width: 100%;
  margin-top: -50%;
  border-radius: 10px 10px 10px 10px;
  z-index: -1;
  background-color: black;
  background-image: linear-gradient(rgba(59, 182, 235, 0), #3bb6eb);
  transform-origin: center;
  z-index: 0;
}

.nextHalf {
  position: relative;
  height: 50%;
  width: 100%;
  margin-top: -100%;
  overflow: hidden;
  border-radius: 10px 10px 0 0;
  z-index: 1;
  background-color: black;
  background-image: linear-gradient(#3bb6eb, rgba(59, 182, 235, 0));
  transform-origin: bottom;
}

.nextFull {
  position: relative;
  height: 100%;
  width: 100%;
  background-color: #3bb6eb;
  margin-top: -50%;
  border-radius: 10px 10px 10px 10px;
  z-index: -1;
}

.flip1 {
  animation: flip1 ease-in 1;
  animation-duration: 1s;
}

.flip2 {
  animation: flip2 ease-out 1;
  animation-duration: 1s;
}

@keyframes flip1 {
  0% {
    transform: rotateX(0deg);
    background-color: #3bb6eb;
  }
  50% {
    transform: rotateX(90deg);
    background-color: black;
  }
  100% {
    transform: rotateX(90deg);
  }
}

@keyframes flip2 {
  0% {
    transform: rotateX(-90deg);
  }
  50% {
    transform: rotateX(-90deg);
  }
  100% {
    transform: rotateX(0deg);
    background-color: #3bb6eb;
  }
}
</style>
