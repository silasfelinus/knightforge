<script lang="ts">
import { defineComponent, ref, onMounted, watch } from 'vue';

export default defineComponent({
  props: {
    folderName: {
      type: String,
      default: 'splash',
    },
  },
  setup(props) {
    const randomImageUrl = ref('');
    let imagesList: string[] = [];

    const getRandomImageUrl = () => {
      if (imagesList.length === 0) {
        console.error('No images found in the folder');
        return;
      }
      const randomIndex = Math.floor(Math.random() * imagesList.length);
      randomImageUrl.value = imagesList[randomIndex];
    };

    const loadImages = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/images?folderName=${props.folderName}`
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

    onMounted(() => {
      loadImages();
    });

    watch(
      () => props.folderName,
      () => {
        loadImages();
      }
    );

    return { randomImageUrl };
  },
});
</script>
