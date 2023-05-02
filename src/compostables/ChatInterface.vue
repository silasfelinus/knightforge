<template>
  <div class="chat-interface">
    <div class="chat-window">
      <!-- Chat window content here -->
    </div>
  </div>
</template>

<script setup>
export default {
  // Component setup
};
</script>

<style>
.chat-interface {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.chat-window {
  position: absolute;
  top: 0;
  right: 0;
  width: 30%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  overflow-y: auto;
}
</style>
