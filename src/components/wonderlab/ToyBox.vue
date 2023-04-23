<template>
  <div class="toybox-container">
    <h1>Welcome to the ToyBox!</h1>
    <div class="toybox-grid">
      <router-link
        v-for="(route, index) in toyboxRoutes"
        :key="index"
        :to="route.path"
        class="toybox-item"
      >
        <div class="toybox-item-preview">
          <div v-if="route.name === 'Butterflies'">🦋🦋🦋</div>
          <div v-else-if="route.name === 'Butterfly'">🦋</div>
          <div v-else-if="route.name === 'DraggableComponent'">🔮</div>
          <div v-else-if="route.name === 'ButterflyChest'">🎁</div>
        </div>
        <p>{{ route.name }}</p>
      </router-link>
    </div>
    <div class="route-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { toyboxRoutes } from '@/router/modules/toyboxRoutes';

export default defineComponent({
  name: 'ToyBox',
  setup() {
    return {
      toyboxRoutes,
    };
  },
});
</script>

<style scoped>
.toybox-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
}

.toybox-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 1200px;
  margin-top: 2rem;
}

.toybox-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid #ccc;
  padding: 1rem;
  border-radius: 0.5rem;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
}

.toybox-item:hover {
  background-color: #eee;
  transform: scale(1.05);
  cursor: pointer;
}

.route-container {
  margin-top: 2rem;
}

.route-container > * {
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
}
</style>
