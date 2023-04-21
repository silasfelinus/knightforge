<template>
  <q-layout>
    <q-header elevated class="header">
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
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TitleBar from '../gamescreens/TitleBar.vue';
import SplashMessage from '../gamescreens/SplashMessage.vue';
import SplashViewer from '../gamescreens/SplashFolder.vue';

export default defineComponent({
  components: {
    TitleBar,
    SplashMessage,
    SplashViewer,
  },
});
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border: 2px solid #ccc;
  background-color: #b8e0ff;
  width: 100vw;
  height: auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.header-left,
.header-right {
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
}

.butterfly-frame {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
}

.header-image {
  max-height: 100vh;
  width: auto;
}

.butterfly-mascot {
  margin-bottom: 1rem;
  color: #3b5998;
}

.splash-message {
  font-size: calc(0.8rem + 0.5vw);
}

@media screen and (max-width: 768px) {
  .header {
    flex-direction: column;
  }

  .header-left,
  .header-right {
    margin-bottom: 1rem;
  }
}
</style>
