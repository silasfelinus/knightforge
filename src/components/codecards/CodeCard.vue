<template>
  <q-card class="code-card">
    <q-img :src="image" :alt="title" />

    <q-card-section class="bg-primary text-white">
      <div class="text-h6">{{ title }}</div>
      <div>{{ type }}</div>
    </q-card-section>

    <q-card-section>
      <div>{{ description }}</div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CodeCard',
  props: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String, required: true },
    image: { type: String, required: true },
  },
});
</script>

<style scoped>
.code-card {
  border: 2px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  max-width: 300px;
}

.code-card:hover {
  box-shadow: 0 7px 14px rgba(0, 0, 0, 0.13), 0 3px 6px rgba(0, 0, 0, 0.1);
  transform: translateY(-3px);
}
</style>
