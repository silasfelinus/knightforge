<template>
  <div class="nav-menu">
    <button @click="toggleDropdown" class="nav-menu__toggle">Menu</button>
    <div class="nav-menu__dropdown" v-show="dropdownVisible">
      <ul>
        <li v-for="route in routes" :key="route.path">
          <router-link :to="route.path">{{ route.name }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { RouteRecordRaw } from 'vue-router';
import { layerRoutes } from '@/router/modules/layerRoutes';

export default defineComponent({
  name: 'NavMenu',
  setup() {
    const dropdownVisible = ref(false);

    const toggleDropdown = () => {
      dropdownVisible.value = !dropdownVisible.value;
    };

    const routes: RouteRecordRaw[] = layerRoutes;

    return {
      dropdownVisible,
      toggleDropdown,
      routes,
    };
  },
});
</script>

<style scoped>
.nav-menu {
  position: relative;
}

.nav-menu__toggle {
  cursor: pointer;
}

.nav-menu__dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 10;
  background-color: white;
  border: 1px solid #ccc;
  padding: 1rem;
}

.nav-menu__dropdown ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.nav-menu__dropdown li {
  margin-bottom: 0.5rem;
}
</style>
