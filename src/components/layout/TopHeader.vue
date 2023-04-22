<template>
  <q-header
    elevated
    class="header"
    :style="{ '--header-bg-color': backgroundColor }"
  >
    <div class="header-left">
      <SplashViewer class="header-image" folder="chest" />
    </div>
    <div class="header-center">
      <TitleBar />
      <SplashMessage class="splash-message" />
    </div>
    <div class="header-right">
      <SplashViewer class="header-image" folder="wondershed" />
    </div>
  </q-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TitleBar from '../gamescreens/TitleBar.vue';
import SplashMessage from '../gamescreens/SplashMessage.vue';
import SplashViewer from '../gamescreens/SplashFolder.vue';

export default defineComponent({
  props: {
    backgroundColor: {
      type: String,
      default: '#b8e0ff',
    },
  },
  components: {
    TitleBar,
    SplashMessage,
    SplashViewer,
  },
});
</script>

<style scoped>
.header {
  height: 20vh;
  overflow: hidden;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--header-bg-color);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-image {
  max-height: 100%;
  object-fit: contain;
}

@media (max-width: 768px) {
  .header {
    flex-direction: column;
  }

  .header-left,
  .header-right {
    margin-bottom: 1rem;
  }
}
</style>
