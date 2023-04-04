<template>
  <q-footer>
    <q-input
      class="footer-input"
      outlined
      v-model="inputText"
      placeholder="Enter text"
    />
    <div class="color-background-filler" />
  </q-footer>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'AppFooter',
  setup() {
    const inputText = ref('');

    return {
      inputText
    };
  }
});
</script>

<style scoped lang="scss">
.q-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
}

.footer-input {
  flex: 1;
  margin-right: 8px;
}

.color-background-filler {
  width: 100px;
  height: 100%;
  background-color: #4caf50;
}
</style>
