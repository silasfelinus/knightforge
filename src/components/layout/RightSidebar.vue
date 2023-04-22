<template>
  <div class="right-sidebar" :class="{ visible: isVisible }">
    <button class="toggle-button" @click="isVisible = !isVisible">
      Toggle
    </button>
    <soap-bubbles />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SoapBubbles from '../gamescreens/SoapBubbles.vue';

export default defineComponent({
  name: 'RightSidebar',
  components: {
    SoapBubbles,
  },
  data() {
    return {
      isVisible: true,
    };
  },
});
</script>

<style>
.right-sidebar {
  position: fixed;
  top: 0vh; /* adjust to your header height */
  bottom: 60px; /* adjust to your footer height */
  right: -160px; /* adjust to your desired collapsed width */
  width: 160px; /* adjust to your desired expanded width, 20% thinner */
  transition: right 0.3s;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1000;
}

.right-sidebar.visible {
  right: 0;
}

.toggle-button {
  position: absolute;
  bottom: 10px; /* move the button to the bottom */
  right: -30px; /* adjust to your desired position */
}
</style>
