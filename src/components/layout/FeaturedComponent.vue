<template>
  <div>
    <component :is="getComponentById(id)"></component>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import ComponentName1 from './ButterflySimple.vue';
import ComponentName2 from './ButterflyHorde.vue';
import ComponentName3 from './SplashFolder.vue';
import ComponentName4 from './SplashMessage.vue';
import ComponentName5 from './TitleBar.vue';
import ComponentName6 from './SplitFlap.vue';

export default defineComponent({
  components: {
    ComponentName1,
    ComponentName2,
    ComponentName3,
    ComponentName4,
    ComponentName5,
    ComponentName6,
  },
  props: {
    id: {
      type: Number as PropType<number>,
      required: true,
    },
  },
  methods: {
    getComponentById(id: number) {
      switch (id) {
        case 1:
          return 'ComponentName1';
        case 2:
          return 'ComponentName2';
        case 3:
          return 'ComponentName3';
        case 4:
          return 'ComponentName4';
        case 5:
          return 'ComponentName5';
        case 6:
          return 'ComponentName6';
        default:
          throw new Error(`Invalid component id: ${id}`);
      }
    },
  },
});
</script>
