<template>
  <div class="main-content">
    <div class="warning">This is a placeholder for the main content.</div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-content {
  background-color: $negative;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.warning {
  color: $negative;
  font-weight: bold;
  padding: 1rem;
}

.content {
  flex: 1;
  padding: 1rem;
}
</style>
