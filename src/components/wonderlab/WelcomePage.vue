<template>
  <div>
    <h1>Welcome {{ userName }}!</h1>
    <p>Your start page is {{ userStartPage }}.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useUserStore } from '@/stores/userStore';

export default defineComponent({
  name: 'WelcomePage',

  setup() {
    const userStore = useUserStore();

    const userName = userStore.getName;
    const userStartPage = userStore.getStartPage;

    onMounted(async () => {
      try {
        await userStore.fetchUserData();
      } catch (error) {
        console.error('Error fetching user data:', error);
        throw error; // This will propagate the error to the global error handler
      }
    });

    return {
      userName,
      userStartPage,
    };
  },
});
</script>
