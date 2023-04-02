// src/stores/useAppStore.ts
import { ref, reactive } from 'vue';

const isLoggedIn = ref(false);
const nightMode = ref(false);
const notifications = ref([]);

function setLoggedIn(loggedIn) {
  isLoggedIn.value = loggedIn;
}

function toggleNightMode() {
  nightMode.value = !nightMode.value;
}

function addNotification(notification) {
  notifications.value.push(notification);
}

function removeNotification(index) {
  notifications.value.splice(index, 1);
}

export function useAppStore() {
  return {
    isLoggedIn,
    nightMode,
    notifications,
    setLoggedIn,
    toggleNightMode,
    addNotification,
    removeNotification,
  };
}
