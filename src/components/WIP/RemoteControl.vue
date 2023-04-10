<template>
  <div>
    <select v-model="selectedFrameId">
      <option v-for="(id, index) in magicFrameIds" :key="index" :value="id">
        {{ id }}
      </option>
    </select>
    <button @click="createMagicFrame">+</button>
    <input type="checkbox" v-model="selectAll" @change="toggleSelectAll" />
    <label for="selectAll">All</label>
    <select v-model="selectedRoute">
      <option
        v-for="(route, index) in activeRoutes"
        :key="index"
        :value="route"
      >
        {{ route }}
      </option>
    </select>
    <button @click="changeMagicFrame">Change Frame</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      magicFrameIds: [],
      selectedFrameId: null,
      selectAll: false,
      activeRoutes: [],
      selectedRoute: null,
    };
  },
  methods: {
    createMagicFrame() {
      // Implement your logic to create a new MagicFrame
    },
    toggleSelectAll() {
      // Implement your logic to toggle the selection of all MagicFrames
    },
    changeMagicFrame() {
      // Implement your logic to change the selected MagicFrame(s) to display the selected route
    },
  },
};
</script>
