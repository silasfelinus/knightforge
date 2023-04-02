<template>
  <div class="main-layout">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainLayout',
});
</script>

<style scoped lang="scss">
.main-layout {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}
</style>
