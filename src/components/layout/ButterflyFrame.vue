<template>
  <div class="butterfly-frame">
    <div class="corner circle top-left"></div>
    <div class="corner circle top-right"></div>
    <div class="corner circle bottom-left"></div>
    <div class="corner circle bottom-right"></div>
    <div class="frame-content">
      <slot></slot>
    </div>
    <ButterflyMascot class="butterfly-mascot" ref="butterflyMascot" />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  ref,
  nextTick,
  Ref,
  ComponentPublicInstance,
} from 'vue';
import ButterflyMascot from './ButterflyMascot.vue';

export default defineComponent({
  name: 'ButterflyFrame',
  components: {
    ButterflyMascot,
  },
  setup() {
    const butterflyMascot: Ref<ComponentPublicInstance<
      typeof ButterflyMascot
    > | null> = ref(null);

    ref(null);

    async function positionButterfly() {
      await nextTick();

      const cornerPositions = [
        'top-left',
        'top-right',
        'bottom-left',
        'bottom-right',
      ];

      const randomIndex = Math.floor(Math.random() * cornerPositions.length);
      const cornerClass = cornerPositions[randomIndex];

      if (butterflyMascot.value) {
        butterflyMascot.value.$el.classList.add(cornerClass);
      }
    }

    onMounted(positionButterfly);

    return {
      butterflyMascot,
    };
  },
});
</script>

<style scoped>
.butterfly-frame {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border: 2px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}

.corner {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
}

.circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #333;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.top-left {
  top: 0;
  left: 0;
  transform: translateY(-50%) translateX(-50%);
}

.top-right {
  top: 0;
  right: 0;
  transform: translateY(-50%) translateX(50%);
}

.bottom-left {
  bottom: 0;
  left: 0;
  transform: translateY(50%) translateX(-50%);
}

.bottom-right {
  bottom: 0;
  right: 0;
  transform: translateY(50%) translateX(50%);
}

.frame-content {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.butterfly-mascot {
  position: absolute;
  top: 0;
  left: 0;
  max-height: 10vh;
}
</style>
