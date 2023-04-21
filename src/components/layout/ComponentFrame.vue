<template>
  <div class="component-frame" :style="{ backgroundColor: backgroundColor }">
    <teleport to="body">
      <error-fallback v-if="hasError" />
    </teleport>
    <component :is="component" v-if="!hasError" v-on:error-captured="onError" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ErrorFallback from './ErrorFallback.vue';

const getRandomNumber = () => Math.floor(Math.random() * 256);

export default defineComponent({
  props: {
    component: {
      type: String,
      required: true,
    },
  },
  components: {
    ErrorFallback,
  },
  setup() {
    const backgroundColor = ref(
      `rgba(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()}, 0.7)`
    );

    const hasError = ref(false);

    const onError = (error: Error) => {
      console.error('Error in component:', error);
      hasError.value = true;
    };

    return {
      backgroundColor,
      hasError,
      onError,
    };
  },
});
</script>

<style scoped>
.component-frame {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 10px;
  height: 100%;
  box-sizing: border-box;
  padding: 1rem;
  border-radius: 8px;
}
</style>
