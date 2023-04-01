<template>
  <div class="main-layout">
    <ScreenWidgetWrapper />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ScreenWidgetWrapper from '../components/screenspace/ScreenWidgetWrapper.vue';

export default defineComponent({
  name: 'MainLayout',
  components: {
    ScreenWidgetWrapper,
  },
});
</script>

<style scoped lang="scss">
.main-layout {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}
</style>
