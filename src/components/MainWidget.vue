<template>
  <div class="main-widget">
    <q-img
      class="splash-screen"
      src="./src/public/splash1.png"
      alt="Splash Screen"
      :ratio="16 / 9"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { QImg } from 'quasar';

export default defineComponent({
  name: 'MainWidget',
  components: {
    QImg,
  },
  setup() {
    // Add your composition logic here
  },
});
</script>

<style scoped lang="scss">
.main-widget {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.splash-screen {
  max-width: 100%;
  max-height: 100%;
}
</style>
