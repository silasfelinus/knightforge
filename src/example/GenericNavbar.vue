<template>
  <nav>
    <ul>
      <li @click="navigateTo('Home')">Home</li>
      <li @click="navigateTo('About')">About</li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'GenericNavbar',
  setup() {
    // Use Vue Router for local navigation
    const router = useRouter();

    // Local call to navigate between pages
    const navigateTo = (page: string) => {
      router.push({ name: page });
    };

    return {
      navigateTo,
    };
  },
});
</script>

<style lang="scss">
/* Add component-specific styles */
</style>
