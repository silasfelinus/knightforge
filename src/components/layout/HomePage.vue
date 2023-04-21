<template>
  <div class="home-page">
    <header class="header">
      <top-header v-if="topHeader.isActive" />
    </header>
    <aside class="left-sidebar">
      <l-sidebar v-if="lSidebar.isActive" />
    </aside>
    <main class="main-content">
      <main-screen />
    </main>
    <aside class="right-sidebar">
      <r-sidebar v-if="rSidebar.isActive" />
    </aside>
    <footer class="footer">
      <bottom-footer v-if="bottomFooter.isActive" />
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TopHeader from './ButterflyHeader.vue';
import LSidebar from './ButterflyLeftDrawer.vue';
import RSidebar from './ButterflyRightDrawer.vue';
import BottomFooter from '../layout/BottomFooter.vue';
import MainScreen from '../layout/MainScreenSimple.vue';

export default defineComponent({
  components: {
    TopHeader,
    LSidebar,
    RSidebar,
    BottomFooter,
    MainScreen,
  },
  data() {
    return {
      topHeader: { isActive: true },
      lSidebar: { isActive: true },
      rSidebar: { isActive: true },
      bottomFooter: { isActive: true },
    };
  },
});
</script>

<style scoped>
.home-page {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'header header header'
    'left-sidebar main-content right-sidebar'
    'footer footer footer';
  gap: 1rem;
  height: 100vh;
  width: 100%;
}

.header {
  grid-area: header;
}

.left-sidebar {
  grid-area: left-sidebar;
}

.main-content {
  grid-area: main-content;
}

.right-sidebar {
  grid-area: right-sidebar;
}

.footer {
  grid-area: footer;
}

/* Responsive rules */
@media (max-width: 1024px) {
  .home-page {
    grid-template-columns: 1fr 4fr 1fr;
  }
}

@media (max-width: 768px) {
  .home-page {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto 1fr auto auto;
    grid-template-areas:
      'header'
      'left-sidebar'
      'main-content'
      'right-sidebar'
      'footer';
  }
}
</style>
