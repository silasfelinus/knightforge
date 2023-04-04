<template>
  <q-footer class="remote-control">
    <q-toolbar>
      <q-btn-group>
        <q-btn label="Add Card" @click="addCard" />
        <q-btn label="Select Card" @click="selectCard" />
        <q-btn label="Remove Card" @click="removeCard" />
        <q-btn label="Change Card" @click="changeCard" />
        <q-btn label="Toggle Night Mode" @click="toggleNightMode" />
      </q-btn-group>
    </q-toolbar>
  </q-footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useAppStore } from '../stores/useAppStore';

export default defineComponent({
  name: 'RemoteControl',
  setup() {
    const appStore = useAppStore();

    const addCard = () => {
      const newCard = {
        content: 'New Card',
        x: 0,
        y: 0,
        width: appStore.gridWidth / 2,
        height: appStore.gridHeight / 2
      };
      appStore.addScreenCard(newCard);
    };

    const selectCard = () => {
      // Assuming the first card is to be selected for demo purposes
      if (appStore.screenCards.length > 0) {
        appStore.selectCard(appStore.screenCards[0].id);
      }
    };

    const removeCard = () => {
      appStore.removeSelectedCards();
    };

    const changeCard = () => {
      // Assuming the first card is to be changed for demo purposes
      if (appStore.screenCards.length > 0) {
        const updatedCard = {
          ...appStore.screenCards[0],
          content: 'Updated Card'
        };
        appStore.updateScreenCard(updatedCard);
      }
    };

    const toggleNightMode = () => appStore.toggleNightMode();

    return {
      addCard,
      selectCard,
      removeCard,
      changeCard,
      toggleNightMode
    };
  }
});
</script>

<style scoped lang="scss">
.remote-control {
  background-color: $secondary;
  color: $primary;
}
</style>
