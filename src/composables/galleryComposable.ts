import { ref, computed } from "vue";
import { Gallery, Image, Photoset, Modeler, Tag } from "@/stores/types";
import * as utils from "@/imageUtils";

export function useGalleryManager() {
  const galleries = ref<Gallery[]>([]);
  const images = ref<Image[]>([]);
  const photosets = ref<Photoset[]>([]);
  const modelers = ref<Modeler[]>([]);

  function addGallery(gallery: Gallery) {
    galleries.value.push(gallery);
  }

  // Implement other functions to manage galleries, photosets, modellers, and images using the utility functions

  return {
    galleries,
    images,
    photosets,
    modelers,
    addGallery,
    // other functions
  };
}
