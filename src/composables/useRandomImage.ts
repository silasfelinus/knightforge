// src/composables/useRandomImage.ts
import { ref } from 'vue';

export function useRandomImage(folderName: string) {
  const randomImageUrl = ref<string | null>(null);
  let imagesList: string[] = [];

  const serverAddress = 'http://localhost:3000';

  const getRandomImageUrl = () => {
    if (imagesList.length === 0) {
      console.error('No images found in the folder');
      return;
    }
    const randomIndex = Math.floor(Math.random() * imagesList.length);
    randomImageUrl.value = `${serverAddress}/assets/images/${folderName}/${imagesList[randomIndex]}`;
  };

  const loadImages = async () => {
    try {
      console.log(
        `Fetching images from: ${serverAddress}/images?folderName=${folderName}`
      );
      const response = await fetch(
        `${serverAddress}/images?folderName=${folderName}`
      );
      if (!response.ok) {
        console.error(await response.text());
        return;
      }

      imagesList = await response.json();
      getRandomImageUrl();
    } catch (error) {
      console.error('Error while fetching images:', error);
    }
  };

  return {
    randomImageUrl,
    loadImages,
    getRandomImageUrl,
  };
}
