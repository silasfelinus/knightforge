<template>
  <div class="vue-viewer">
    <q-card v-for="route in routes" :key="route.path" class="route-card">
      <q-card-section>
        <div class="text-h6">{{ route.name }}</div>
      </q-card-section>
      <q-img :src="route.meta.image" />
      <q-card-section>
        <div class="status-indicator" :class="route.meta.status"></div>
        <router-link :to="route.path">View Route</router-link>
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'VueViewer',
  setup() {
    const router = useRouter();
    const routes = router
      .getRoutes()
      .filter((route) => route.meta && route.meta.image);

    return { routes };
  },
});
</script>

<style lang="scss">
.vue-viewer {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 1rem;
}

.route-card {
  text-align: center;
}

.status-indicator {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;

  &.active {
    background-color: green;
  }

  &.inactive {
    background-color: red;
  }
}
</style>
