<template>
  <div class="bottom-footer">
    <div class="bottom-footer-inner">
      <ComponentFrame :component="'SplashMessage'">
        <SplashMessage />
      </ComponentFrame>
      <p class="copyright">
        © {{ new Date().getFullYear() }} Cafe Purr. All Rights Reserved.
      </p>
      <ButterflyHorde />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ButterflyHorde from '../gamescreens/ButterflyHorde.vue';
import SplashMessage from '../gamescreens/SplashMessage.vue';
import ComponentFrame from './ComponentFrame.vue';

export default defineComponent({
  components: {
    ButterflyHorde,
    SplashMessage,
    ComponentFrame,
  },
});
</script>

<style scoped>
.bottom-footer {
  background-color: #1e88e5;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.bottom-footer-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}

.copyright {
  margin-top: 0.5rem;
  font-size: 0.8rem;
}
</style>
