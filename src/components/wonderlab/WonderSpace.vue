<template>
  <q-layout id="wonder-space">
    <div class="container">
      <div class="features">
        <ButterflyHorde />
        <DraggableComponent />
        <ToyBox />
      </div>
    </div>
  </q-layout>
</template>

<script>
import ButterflyHorde from '@/components/butterfly/ButterflyHorde.vue';
import DraggableComponent from '@/components/wonderlab/DraggableComponent.vue';
import ToyBox from '@/components/wonderlab/ToyBox.vue';

export default {
  name: 'WonderSpace',
  components: {
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
