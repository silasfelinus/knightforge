<template>
  <div>
    <div class="container">
      <div class="dropdowns-controls">
        <!-- Add your drop-down selection boxes, buttons, dials, and sliders here -->
      </div>
      <div class="input-container">
        <input type="text" placeholder="I have an Idea" />
        <button class="make-art-btn" @click="makeArt">Make Art</button>
      </div>
    </div>
    <RandomImage
      :folderName="'background'"
      @image-updated="handleImageUpdate"
    />
    <ButterflySolo />
    <VoiceControl />

    <ArtAsset ref="artAsset" />
  </div>
</template>

<script lang="ts" setup>
import RandomImage from '@/components/serendipity/RandomImage.vue';
import ButterflySolo from '@/components/wonderlab/ButterflySolo.vue';
import VoiceControl from '@/components/wonderlab/SerendipityVoice.vue';
import ArtAsset from '@/components/serendipity/ArtAsset.vue';
import { ref } from 'vue';

type ArtAssetInstance = InstanceType<typeof ArtAsset> & {
  setImageSrc: (src: string) => void;
  setRandomColor: () => void;
};

const artAsset = ref<ArtAssetInstance | null>(null);

const makeArt = () => {
  artAsset.value?.setRandomColor();
};

const handleImageUpdate = (newImageSrc: string) => {
  artAsset.value?.setImageSrc(newImageSrc);
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.dropdowns-controls {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.make-art-btn {
  background-color: #4caf50;
  color: white;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;
  transition: background-color 0.3s;
}

.make-art-btn:hover {
  background-color: #3f8e3d;
}
</style>
