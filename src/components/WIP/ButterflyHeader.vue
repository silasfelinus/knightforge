<template>
  <q-layout>
    <q-header elevated class="header">
      <div class="header-left">
        <ButterflyFrame class="butterfly-frame">
          <SplashViewer class="header-image" folder="chest" />
        </ButterflyFrame>
      </div>
      <div class="header-center">
        <ButterflyMascot class="butterfly-mascot" />
        <TitleBar />
        <SplashMessage class="splash-message" />
      </div>
      <div class="header-right">
        <ButterflyFrame class="butterfly-frame">
          <SplashViewer class="header-image" folder="wondershed" />
        </ButterflyFrame>
      </div>
    </q-header>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TitleBar from '../layout/TitleBar.vue';
import SplashMessage from '../layout/SplashMessage.vue';
import SplashViewer from '../layout/SplashFolder.vue';
import ButterflyMascot from './ButterflyMascot.vue';
import ButterflyFrame from './ButterflyFrame.vue';

export default defineComponent({
  components: {
    TitleBar,
    SplashMessage,
    SplashViewer,
    ButterflyMascot,
    ButterflyFrame,
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
