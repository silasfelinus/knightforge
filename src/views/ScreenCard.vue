<template>
  <q-card class="screen-card">
    <q-toolbar>
      <q-toolbar-title>{{ id }}</q-toolbar-title>
    </q-toolbar>
    <q-card-section>
      <div class="card-content">
        <q-input v-model="name" label="Name" />
        <splash-image />
        <p class="description">{{ description }}</p>
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import SplashImage from '@/components/SplashImage.vue';

export default defineComponent({
  name: 'ScreenCard',
  components: {
    SplashImage
  },
  props: {
    id: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      default: ''
    }
  },
  setup() {
    const name = ref('');

    return {
      name
    };
  }
});
</script>

<style scoped>
.screen-card {
  flex: 1;
  display: flex;
  flex-direction: column;
}

q-card-section {
  flex: 1;
}

.card-content {
  display: flex;
  flex-direction: column;
}

.description {
  margin-top: 1rem;
}
</style>
