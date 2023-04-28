<template>
  <div class="image-container">
    <img v-if="randomImageUrl" :src="randomImageUrl" alt="Random Image" />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, watch } from 'vue';
import { useRandomImage } from '@/composables/useRandomImage';

const props = defineProps({
  folderName: {
    type: String,
    default: 'splash',
  },
});

const emit = defineEmits(['image-updated']);

const { randomImage } = useRandomImage(props.folderName);

onMounted(() => {
  loadImages();
});

watch(
  () => props.folderName,
  () => {
    loadImages();
  }
);

watch(randomImageUrl, () => {
  emit('image-updated', randomImageUrl.value);
});
</script>

<style scoped>
.image-container {
  height: 100%;
  overflow: hidden;
  position: relative;
}
</style>
