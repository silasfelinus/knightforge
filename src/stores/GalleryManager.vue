<script lang="ts">
import { defineComponent } from 'vue';
import { Photoset, Modeler, Gallery, Tag } from '@/stores/types';
import useGalleryManager from '@/composables/useGalleryManager';

export default defineComponent({
  name: 'GalleryManager',
  props: {
    galleries: {
      type: Array as () => Gallery[],
      required: true,
    },
    photosets: {
      type: Array as () => Photoset[],
      required: true,
    },
    modelers: {
      type: Array as () => Modeler[],
      required: true,
    },
    tags: {
      type: Array as () => Tag[],
      required: true,
    },
  },
  setup(props) {
    const {
      getImageById,
      getPhotosetByName,
      getModelerByName,
      getGalleryByName,
      getTagByName,
      getRandomImages,
    } = useGalleryManager(
      props.galleries,
      props.photosets,
      props.modelers,
      props.tags
    );

    return {
      getImageById,
      getPhotosetByName,
      getModelerByName,
      getGalleryByName,
      getTagByName,
      getRandomImages,
    };
  },
});
</script>
