<template>
  <div class="home-page">
    <header class="header">
      <top-header v-if="topHeader.isActive" />
    </header>
    <aside class="left-sidebar">
      <custom-sidebar
        v-if="leftCustomSidebar.isActive"
        :side="'left'"
        :isCollapsible="true"
        :isPartialCollapsible="true"
        :hasToggle="true"
        component="LeftDrawer"
      />
    </aside>
    <main class="main-content">
      <main-screen />
    </main>
    <aside class="right-sidebar">
      <custom-sidebar
        v-if="rightCustomSidebar.isActive"
        :side="'right'"
        :isCollapsible="true"
        :isPartialCollapsible="true"
        :hasToggle="true"
        component="RightDrawer"
      />
    </aside>
    <footer class="footer">
      <bottom-footer v-if="bottomFooter.isActive" />
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TopHeader from './TopHeader.vue';
import CustomSidebar from './CustomSidebar.vue';
import BottomFooter from './BottomFooter.vue';
import MainScreen from './MainScreen.vue';

export default defineComponent({
  components: {
    TopHeader,
    CustomSidebar,
    BottomFooter,
    MainScreen,
  },
  data() {
    return {
      topHeader: { isActive: true },
      leftCustomSidebar: { isActive: true },
      rightCustomSidebar: { isActive: true },
      bottomFooter: { isActive: true },
    };
  },
});
</script>

<style scoped>
.home-page {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 20vh 75vh 5vh;
  grid-template-areas:
    'header header header'
    'left-sidebar main-content right-sidebar'
    'footer footer footer';
  gap: 1rem;
  height: 100vh;
  width: 100vw;
  background-color: #f0f0f0;
}

.header {
  grid-area: header;
}

.left-sidebar {
  grid-area: left-sidebar;
  height: 80vh;
}

.main-content {
  grid-area: main-content;
  display: flex;
  flex-direction: column;
}

.right-sidebar {
  grid-area: right-sidebar;
  height: 80vh;
}

.footer {
  grid-area: footer;
  min-height: 50px;
  max-height: 100px;
  display: flex;
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
    grid-template-rows: 20vh auto 1fr auto auto;
    grid-template-areas:
      'header'
      'left-sidebar'
      'main-content'
      'right-sidebar'
      'footer';
  }
}
</style>
