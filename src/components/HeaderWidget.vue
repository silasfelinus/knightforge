<template>
  <div class="header-widget">
    <div class="header-title">{{ title }}</div>
    <RemoteWidget />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import RemoteWidget from './RemoteWidget.vue';

export default defineComponent({
  name: 'HeaderWidget',
  components: {
    RemoteWidget,
  },
  setup() {
    const store = useStore();

    const title = computed(() => store.state.headerTitle);

    return {
      title,
    };
  },
});
</script>

<style scoped>
.header-widget {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.header-title {
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  padding: 0.5rem;
  background: #f0f0f0;
  border-bottom: 1px solid #e0e0e0;
}
</style>
