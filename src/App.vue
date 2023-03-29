<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          round
          dense
          icon="menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <q-toolbar-title> Knightforge Wonderlab </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      :width="260"
      :breakpoint="500"
      bordered
    >
      <q-list>
        <q-item v-for="(item, index) in menuItems" :key="index">
          <q-item-section avatar>
            <q-icon :name="item.icon" />
          </q-item-section>
          <q-item-section v-if="leftDrawerOpen">
            <q-item-label>{{ item.label }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-drawer
      v-model="leftToolDrawerOpen"
      side="left"
      :width="100"
      :breakpoint="500"
      bordered
    >
      <!-- Draggable playspace tools -->
    </q-drawer>

    <q-page-container>
      <q-page>
        <div class="q-gutter-md row items-center justify-center">
          <q-btn
            round
            @click="droppableAreaVisible = !droppableAreaVisible"
            icon="visibility"
          />
          <q-card v-if="droppableAreaVisible" class="droppable-area" rounded>
            <q-resize-observer @resize="onResize">
              <!-- Droppable area content -->
            </q-resize-observer>
          </q-card>
          <q-btn round @click="chatWindowOpen = !chatWindowOpen" icon="chat" />
        </div>
      </q-page>
    </q-page-container>

    <q-drawer
      v-model="chatWindowOpen"
      side="right"
      :width="300"
      :breakpoint="800"
      bordered
    >
      <!-- Chat window content -->
    </q-drawer>

    <q-footer>
      <q-toolbar>
        <q-toolbar-title> Footer Content </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    const leftDrawerOpen = ref(true);
    const chatWindowOpen = ref(false);
    const leftToolDrawerOpen = ref(false);
    const droppableAreaVisible = ref(true);

    const menuItems = [
      // ... your existing menu items ...
    ];

    // Resize handler for droppable area
    const onResize = (evt) => {
      // Handle resizing here
    };

    return {
      leftDrawerOpen,
      chatWindowOpen,
      menuItems,
      leftToolDrawerOpen,
      droppableAreaVisible,
      onResize,
    };
  },
});
</script>

<style lang="scss">
@import './src/css/quasar.variables.scss';

$border-radius-large: 1rem;

.q-layout {
  background-color: $secondary;

  .q-header,
  .q-footer {
    background-color: $primary;
    color: $secondary;
    font-weight: bold;

    .q-toolbar-title {
      color: $secondary;
    }
  }

  .q-drawer {
    background-color: $accent;

    .q-list {
      .q-item {
        color: $primary;
        font-weight: bold;
        transition: background-color 0.3s ease;

        &:hover {
          background-color: rgba($primary, 0.1);
        }

        .q-item-section {
          .q-icon {
            color: $primary;
          }
        }
      }
    }
  }

  .droppable-area {
    max-width: 90%;
    height: 0;
    padding-bottom: 90%;
    position: relative;
    border: 2px solid $primary;
    border-radius: $border-radius-large;
    background-color: $secondary;
    color: $primary;
    font-weight: bold;

    &:before {
      content: 'Droppable Area';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .q-btn {
    background-color: $primary;
    color: $secondary;
    font-weight: bold;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
    border-radius: $border-radius-large;

    &:hover {
      background-color: darken($primary, 10%);
    }
  }
}
</style>
