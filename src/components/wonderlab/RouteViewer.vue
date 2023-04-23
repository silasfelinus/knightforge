<template>
  <div class="route-viewer">
    <div class="route-buttons">
      <button
        v-for="(route, index) in routes"
        :key="index"
        @click="navigateTo(route.path)"
      >
        {{ route.name }}
      </button>
    </div>
    <div class="route-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouteRecordRaw } from 'vue-router';

export default defineComponent({
  name: 'RouteViewer',
  props: {
    routes: {
      type: Array as () => RouteRecordRaw[],
      required: true,
    },
  },
  methods: {
    navigateTo(path: string) {
      this.$router.push(path);
    },
  },
});
</script>

<style scoped>
.route-viewer {
  display: flex;
  flex-direction: column;
}

.route-buttons {
  display: flex;
  gap: 1rem;
}

.route-container {
  margin-top: 2rem;
}
</style>
