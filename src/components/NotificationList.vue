<template>
  <div class="notification-list">
    <div v-for="(notification, index) in notifications" :key="index" class="notification-item">
      {{ notification }}
      <button @click="$emit('remove', index)">×</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NotificationList',
  props: {
    notifications: {
      type: Array as () => string[],
      required: true,
    },
  },
  emits: ['remove'],
});
</script>


