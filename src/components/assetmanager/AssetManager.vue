<template>
  <div class="asset-manager">
    <h2>Asset Manager</h2>
    <div class="assets-container">
      <div v-for="(asset, index) in assets" :key="index" class="asset">
        <img :src="asset.src" :alt="asset.name" />
        <div class="asset-info">
          <p>{{ asset.name }}</p>
          <p>{{ asset.type }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AssetManager',
  data() {
    return {
      assets: [
        {
          src: '@/assets/images/splash02-WEBREADY.webp',
          name: 'Asset 1',
          type: 'Image',
        },
        {
          src: '@/assets/images/splash09-WEBREADY.webp',
          name: 'Asset 2',
          type: 'Image',
        },
        // Add more assets here
      ],
    };
  },
});
</script>

<style scoped>
.asset-manager {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
}

.assets-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;
}

.asset {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.asset img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.asset-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}
</style>
