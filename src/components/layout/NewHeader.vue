<template>
  <q-header
    elevated
    class="header"
    :style="{
      '--header-bg-color': backgroundColor,
      '--header-border-color': borderColor,
    }"
  >
    <div class="header-left">
      <SplashViewer class="header-image" folder="chest" />
    </div>
    <div class="header-center">
      <TitleBar />
      <SplashMessage class="splash-message" />
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
      default: 'rgba(0, 0, 0, 0)',
    },
    borderColor: {
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
<style>
.header {
  height: 20vh;
  overflow: hidden;
  display: flex;
  justify-content: space-between; /* Updated this line */
  align-items: center;
  background: var(--header-bg-color);
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.1)
  );
  border: 4px solid var(--header-border-color);
  border-radius: 8px;
  box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.4), 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1001;
}

.header-image {
  max-height: 100%;
  object-fit: contain;
}

.header-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1; /* Added this line */
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
