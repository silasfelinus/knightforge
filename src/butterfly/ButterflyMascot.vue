<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { createButterflySvg } from './butterflySvg';
import {
  animateButterfly,
  updateButterflyPosition,
} from './ButterflyAnimation';

export default defineComponent({
  name: 'ButterflyMascot',
  setup() {
    const container = ref<HTMLElement | null>(null);
    const svg = ref<SVGElement | null>(null);
    const butterfly = ref<SVGElement | null>(null);
    const mouseX = ref(0);
    const mouseY = ref(0);

    onMounted(() => {
      initSvg();
      createButterfly();
    });

    function initSvg() {
      if (container.value && svg.value) {
        svg.value.setAttribute(
          'viewBox',
          `0 0 ${container.value.clientWidth} ${container.value.clientHeight}`
        );
      }
    }

    function createButterfly() {
      butterfly.value = createButterflySvg();
      if (svg.value) {
        svg.value.appendChild(butterfly.value);
        animateButterfly(butterfly.value);
      }
    }

    function onMouseMove(event: MouseEvent) {
      mouseX.value = event.clientX;
      mouseY.value = event.clientY;
      if (butterfly.value) {
        updateButterflyPosition(butterfly.value, mouseX.value, mouseY.value);
      }
    }

    return {
      container,
      svg,
      onMouseMove,
    };
  },
});
</script>
