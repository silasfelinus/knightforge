<template>
  <div id="app">
    <router-view />
    <notification-list v-if="notifications.length" :notifications="notifications" @remove="removeNotification" />
    <night-mode-toggle v-if="isLoggedIn" @toggle="toggleNightMode" :nightMode="nightMode" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useAppStore } from './stores/useAppStore';
import NotificationList from './components/NotificationList.vue';
import NightModeToggle from './components/NightModeToggle.vue';

export default defineComponent({
  name: 'App',
  components: {
    NotificationList,
    NightModeToggle,
  },
  setup() {
    const appStore = useAppStore();

    // Destructure the required properties and actions from the store
    const { isLoggedIn, notifications, nightMode, removeNotification, toggleNightMode } = appStore;

    return {
      isLoggedIn,
      notifications,
      nightMode,
      removeNotification,
      toggleNightMode,
    };
  },
});
</script>

<style scoped lang="scss">
// Your styles here
</style>

<style lang="scss">
/* Add your base SCSS styling here */

.night-mode {
  background-color: $dark-page;
  color: $info;

  a {
    color: $info;
  }

  // Add any other Night Mode styles as needed
}

/* GlobalNotification component styles */
.global-notification {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

.notification {
  background-color: $warning;
  color: $dark;
  padding: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
