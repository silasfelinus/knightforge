<template>
  <div class="right-sidebar" :class="{ visible: isVisible }">
    <button class="toggle-button" @click="isVisible = !isVisible">
      Toggle
    </button>
    <gamescreens-soap-bubbles />
  </div>
</template>

<script>
import GamescreensSoapBubbles from '../gamescreens/SoapBubbles.vue';

export default {
  name: 'RightSidebar',
  components: {
    GamescreensSoapBubbles,
  },
  data() {
    return {
      isVisible: true,
    };
  },
};
</script>

<style>
.right-sidebar {
  position: fixed;
  top: 60px; /* adjust to your header height */
  bottom: 60px; /* adjust to your footer height */
  right: -200px; /* adjust to your desired collapsed width */
  width: 200px; /* adjust to your desired expanded width */
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
  top: 10px;
  right: -30px; /* adjust to your desired position */
}
</style>
