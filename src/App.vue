<template>
  <q-layout view="hHh lpR fFf">
    <q-header>
      <q-toolbar>
        <q-btn flat dense round @click="toggleSideMenu" icon="menu"></q-btn>
        <q-toolbar-title> App Title </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer
      class="side-widget"
      :class="{ 'side-widget--closed': !drawerOpen }"
      show-if-above
      width="240"
      v-model="drawerOpen"
    >
      <q-list padding>
        <q-item v-for="(item, index) in menuItems" :key="index" clickable>
          <q-item-section avatar>
            <q-icon :name="item.icon"></q-icon>
          </q-item-section>
          <q-item-section>{{ item.label }}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container>
      <!-- Other components will go here -->
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    const drawerOpen = ref(true);

    const toggleSideMenu = () => {
      drawerOpen.value = !drawerOpen.value;
    };

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
      drawerOpen,
      toggleSideMenu,
      menuItems,
    };
  },
});
</script>

<style lang="scss" scoped>
.side-widget {
  // ...
  z-index: 5;
  // ...
}

.side-widget--closed {
  transform: translateX(-100%);
}
</style>
