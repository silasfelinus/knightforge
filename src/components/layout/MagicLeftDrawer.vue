<!-- MagicLeftDrawer.vue -->
<template>
  <div class="magic-left-drawer">
    <q-drawer
      side="left"
      bordered
      show-if-above
      v-model="topDrawerOpen"
      :style="{ '--sidebar-bg-color': backgroundColor }"
      class="top-drawer"
    >
      <GameScreen />
    </q-drawer>

    <q-drawer
      side="left"
      v-model="bottomDrawerOpen"
      :style="{ '--drawer-bg-color': backgroundColor }"
      class="bottom-drawer"
    >
      <butterfly-horde ref="butterflyHorde" :count="200" />
    </q-drawer>

    <div class="toggle-buttons">
      <q-btn
        :icon="topDrawerOpen ? 'expand_more' : 'expand_less'"
        @click="toggleTopDrawer"
        class="top-drawer-toggle-btn"
      />
      <q-btn
        :icon="bottomDrawerOpen ? 'expand_less' : 'expand_more'"
        @click="toggleBottomDrawer"
        class="bottom-drawer-toggle-btn"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import GameScreen from '../layout/GameScreen.vue';
import ButterflyHorde from '../butterfly/ButterflyHorde2.vue';

export default defineComponent({
  components: {
    GameScreen,
    ButterflyHorde,
  },
  props: {
    backgroundColor: {
      type: String,
      default: '#b8e0ff',
    },
  },
  setup() {
    const topDrawerOpen = ref(true);
    const bottomDrawerOpen = ref(false);

    const toggleTopDrawer = () => {
      topDrawerOpen.value = !topDrawerOpen.value;
      if (bottomDrawerOpen.value) bottomDrawerOpen.value = false;
    };

    const toggleBottomDrawer = () => {
      bottomDrawerOpen.value = !bottomDrawerOpen.value;
      if (topDrawerOpen.value) topDrawerOpen.value = false;
    };

    return {
      topDrawerOpen,
      bottomDrawerOpen,
      toggleTopDrawer,
      toggleBottomDrawer,
    };
  },
});
</script>

<style scoped>
.magic-left-drawer {
  position: relative;
  height: 100%;
}

.toggle-buttons {
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.top-drawer-toggle-btn,
.bottom-drawer-toggle-btn {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  transition: background-color 0.3s ease;
}

.top-drawer-toggle-btn:hover,
.bottom-drawer-toggle-btn:hover {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
