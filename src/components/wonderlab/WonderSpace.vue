<template>
  <div id="wonder-space">
    <HeaderBar />
    <div class="container">
      <LeftSidebar />
      <NavMenu />
      <div class="features">
        <ButterflyHorde />
        <DraggableComponent />
        <ToyBox />
      </div>
      <RightSidebar />
    </div>
    <FooterBar />
  </div>
</template>

<script>
import HeaderBar from '@/components/layout/TopHeader.vue';
import FooterBar from '@/components/layout/BottomFooter.vue';
import LeftSidebar from '@/components/layout/MagicLeftDrawer.vue';
import RightSidebar from '@/components/layout/RightSidebar.vue';
import NavMenu from '@/components/wonderlab/NavMenu.vue';
import ButterflyHorde from '@/components/butterfly/ButterflyHorde.vue';
import DraggableComponent from '@/components/wonderlab/DraggableComponent.vue';
import ToyBox from '@/components/wonderlab/ToyBox.vue';

export default {
  name: 'WonderSpace',
  components: {
    HeaderBar,
    FooterBar,
    LeftSidebar,
    RightSidebar,
    NavMenu,
    ButterflyHorde,
    DraggableComponent,
    ToyBox,
  },
};
</script>

<style scoped>
#wonder-space {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  display: flex;
  flex-grow: 1;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}
</style>
