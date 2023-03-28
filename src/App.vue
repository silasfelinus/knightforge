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

    <q-page-container>
      <q-page>
        <div class="q-gutter-md row items-center justify-center">
          <q-card class="droppable-area" rounded>
            <!-- Droppable area content -->
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

    const menuItems = [
      { label: 'Wonderlab', icon: 'home', link: '/wonderlab' },
      { label: 'Playlab', icon: 'games', link: '/playlab' },
      { label: 'ChatGPT', icon: 'chat', link: '/chatgpt' },
      { label: 'Serendipity', icon: 'explore', link: '/serendipity' },
      { label: 'Cosmos', icon: 'space_bar', link: '/cosmos' },
      { label: 'Acrocat Ranch', icon: 'pets', link: '/acrocat-ranch' },
      { label: 'Cafe Purr', icon: 'local_cafe', link: '/cafe-purr' },
      { label: 'Cafe Fred', icon: 'local_cafe', link: '/cafe-fred' },
      { label: 'Digital Art', icon: 'brush', link: '/digital-art' },
      { label: 'Patreon', icon: 'favorite', link: 'https://www.patreon.com' },
      { label: 'Mermaids', icon: 'pool', link: '/mermaids' },
      { label: 'Kittens', icon: 'pets', link: '/kittens' },
      {
        label: 'Redbubble',
        icon: 'shopping_cart',
        link: 'https://www.redbubble.com',
      },
      { label: 'Social', icon: 'group', link: '/social' },
      { label: 'Github', icon: 'code', link: 'https://github.com' },
      { label: 'Donate', icon: 'donations', link: '/donate' },
      { label: 'Settings', icon: 'settings', link: '/settings' },
      { label: 'Help', icon: 'help', link: '/help' },
    ];

    return {
      leftDrawerOpen,
      chatWindowOpen,
      menuItems,
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

    &:hover {
      background-color: darken($primary, 10%);
    }
  }
}
</style>
