<template>
  <div
    class="right-sidebar"
    :class="{ visible: isVisible, 'blacklight-mode': isBlacklightMode }"
  >
    <button class="toggle-button" @click="toggleSidebar">
      <q-icon name="fa-solid fa-chevron-right" />
    </button>
    <soap-bubbles />
    <div class="bottom-buttons">
      <button class="icon-button" @click="toggleBlacklightMode">
        <q-icon
          :name="
            isBlacklightMode
              ? 'fa-solid fa-highlighter'
              : 'fa-solid fa-highlighter'
          "
        />
      </button>
      <!-- Add more buttons with Quasar icons as needed -->
    </div>
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
      isBlacklightMode: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isVisible = !this.isVisible;
    },
    toggleBlacklightMode() {
      this.isBlacklightMode = !this.isBlacklightMode;
    },
  },
});
</script>

<style lang="scss">
.right-sidebar::before {
  content: '';
  position: absolute;
  left: -50px;
  top: 50%;
  width: 50px;
  height: 200px;
  border-radius: 100px 0 0 100px;
  background: linear-gradient(
    90deg,
    rgba(175, 238, 238, 0.2) 20%,
    rgba(240, 255, 255, 0.9) 50%,
    rgba(175, 238, 238, 0.2) 80%
  );
  filter: blur(2px);
  z-index: -1;
  transition: background 0.5s, filter 0.5s;
}

.right-sidebar {
  position: fixed;
  top: 0vh;
  bottom: 60px;
  right: -160px;
  width: 160px;
  transition: right 0.3s;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: 1px solid rgba(0, 0, 0, 0.1); /* Added thin border */
}

.right-sidebar.visible {
  right: 0;
}

.toggle-button {
  position: absolute;
  top: 10px;
  left: -30px;
  background-color: #fff;
  border: none;
  padding: 5px;
  font-size: 1rem;
  cursor: pointer;
}

.icon-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 5px;
}

.bottom-buttons {
  position: absolute;
  bottom: 10px;
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.right-sidebar.blacklight-mode::before {
  background: linear-gradient(
    90deg,
    rgba(0, 255, 255, 0.2) 20%,
    rgba(0, 255, 255, 0.9) 50%,
    rgba(0, 255, 255, 0.2) 80%
  );
}
</style>
