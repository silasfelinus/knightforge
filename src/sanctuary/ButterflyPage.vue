<template>
  <div
    class="page-container"
    style="
      background-image: url('https://server.cafepurr.com/assets/utility/backtree.webp');
    "
  >
    <ButterflyCage />
    <header>
      <h1>Welcome to Cafe Purr</h1>
    </header>
  </div>
</template>

<script setup lang="ts">
import ButterflyCage from './ButterflyCage.vue';
</script>

<style scoped>
.page-container {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  padding-top: 2em;
}

header {
  width: 100%;
  text-align: center;
  padding: 0.5em 0;
  color: white;
  font-size: 1.2em;
  font-weight: bold;
  background: rgba(0, 0, 0, 0.5);
}
</style>
