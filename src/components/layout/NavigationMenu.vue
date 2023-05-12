<template>
  <nav class="navigation-menu">
    <div class="dropdown">
      <button class="dropbtn">Projects</button>
      <div class="dropdown-content">
        <template v-for="(project, index) in allProjects" :key="index">
          <h3>{{ project.id }}</h3>
          <div
            v-for="componentString in project.componentStrings"
            :key="componentString"
          >
            <router-link :to="{ name: componentString }">{{
              componentString
            }}</router-link>
          </div>
        </template>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getActiveProjects } from '@/stores/useProjectComponents';

export default defineComponent({
  name: 'NavigationMenu',
  setup() {
    const allProjects = getActiveProjects();

    return {
      allProjects,
    };
  },
});
</script>

<style lang="scss">
.dropdown {
  position: relative;
  display: inline-block;
}

.dropbtn {
  background-color: #3498db;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content h3 {
  margin: 0;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  font-weight: bold;
  color: #3498db;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropbtn:hover {
  background-color: #3e8e41;
}
</style>
