<template>
  <div class="chat-widget">
    <q-btn
      round
      dense
      icon="chat"
      class="chat-toggle"
      color="accent"
      @click="toggleChat"
    />
    <q-drawer
      v-model="chatOpen"
      side="left"
      :width="320"
      :breakpoint="0"
      show-if-above
      bordered
    >
      <!-- Your chat content goes here -->
    </q-drawer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'ChatWidget',
  setup() {
    const chatOpen = ref(false);

    const toggleChat = () => {
      chatOpen.value = !chatOpen.value;
    };

    return {
      chatOpen,
      toggleChat,
    };
  },
});
</script>

<style lang="scss" scoped>
.chat-widget {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 1000;

  .chat-toggle {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
}
</style>
